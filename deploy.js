const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
require("dotenv").config({ path: __dirname + "/.env" });
const compiledDaoguard = require("./build/Daoguard.json");

let provider = new HDWalletProvider({
  mnemonic: process.env.MNEMONIC,
  providerOrUrl: process.env.INFURA_API,
});

console.log("Mnemonic: " + process.env.MNEMONIC);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log("Deploying Daoguard from account", accounts[0]);
  const result = await new web3.eth.Contract(compiledDaoguard.abi)
    .deploy({ data: compiledDaoguard.evm.bytecode.object })
    .send({ gas: "10000000", from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
