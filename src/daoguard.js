import web3 from "./web3";

const address = "0xc418E5bCf7151197bED3D36f5b5fe19752f29F31";
const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [
      { internalType: "address", name: "addr", type: "address" },
      { internalType: "bool", name: "pass", type: "bool" },
    ],
    name: "addEducationEntity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "addr", type: "address" },
      { internalType: "bool", name: "pass", type: "bool" },
    ],
    name: "addHealthEntity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "addr", type: "address" },
      { internalType: "bool", name: "pass", type: "bool" },
    ],
    name: "addSocialEntity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creator",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "entitiesEducation",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "entitiesHealth",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "entitiesSocial",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];

export default new web3.eth.Contract(abi, address);
