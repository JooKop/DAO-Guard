const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const contractPath = path.resolve(__dirname, "contracts", "Daoguard.sol");
const source = fs.readFileSync(contractPath, "utf8");

const compilerInput = {
  language: "Solidity",
  sources: {
    [contractPath]: {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode.object"],
      },
    },
  },
};

console.log("Compiling Daoguard.sol...");
const rawCompiled = solc.compile(JSON.stringify(compilerInput));
const compiled = JSON.parse(rawCompiled);

fs.ensureDirSync(buildPath);

for (let contract in compiled.contracts[contractPath]) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract + ".json"),
    compiled.contracts[contractPath][contract]
  );
}
