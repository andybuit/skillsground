/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { ERC20Base, ERC20BaseInterface } from "../ERC20Base";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "prevURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "ContractURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960e0523480156200003657600080fd5b506040516200209b3803806200209b8339810160408190526200005991620003af565b818181818160059080519060200190620000759291906200023c565b5080516200008b9060069060208401906200023c565b50504660a052503060c052620000a0620000b9565b60805250620000b190503362000150565b505062000456565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f620000e6620001a2565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b606060058054620001b39062000419565b80601f0160208091040260200160405190810160405280929190818152602001828054620001e19062000419565b8015620002325780601f10620002065761010080835404028352916020019162000232565b820191906000526020600020905b8154815290600101906020018083116200021457829003601f168201915b5050505050905090565b8280546200024a9062000419565b90600052602060002090601f0160209004810192826200026e5760008555620002b9565b82601f106200028957805160ff1916838001178555620002b9565b82800160010185558215620002b9579182015b82811115620002b95782518255916020019190600101906200029c565b50620002c7929150620002cb565b5090565b5b80821115620002c75760008155600101620002cc565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200030a57600080fd5b81516001600160401b0380821115620003275762000327620002e2565b604051601f8301601f19908116603f01168101908282118183101715620003525762000352620002e2565b816040528381526020925086838588010111156200036f57600080fd5b600091505b8382101562000393578582018301518183018401529082019062000374565b83821115620003a55760008385830101525b9695505050505050565b60008060408385031215620003c357600080fd5b82516001600160401b0380821115620003db57600080fd5b620003e986838701620002f8565b935060208501519150808211156200040057600080fd5b506200040f85828601620002f8565b9150509250929050565b600181811c908216806200042e57607f821691505b602082108114156200045057634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051611c0b6200049060003960006108970152600061046c01526000610496015260006104c00152611c0b6000f3fe608060405234801561001057600080fd5b50600436106101475760003560e01c806370a08231116100c8578063a457c2d71161008c578063d505accf11610066578063d505accf146102e5578063dd62ed3e146102f8578063e8a3d4851461033157600080fd5b8063a457c2d71461029f578063a9059cbb146102b2578063ac9650d8146102c557600080fd5b806370a08231146102175780637ecebe00146102405780638da5cb5b14610269578063938e3d7b1461028457806395d89b411461029757600080fd5b8063313ce5671161010f578063313ce567146101c75780633644e515146101d657806339509351146101de57806340c10f19146101f157806342966c681461020457600080fd5b806306fdde031461014c578063095ea7b31461016a57806313af40351461018d57806318160ddd146101a257806323b872dd146101b4575b600080fd5b610154610339565b6040516101619190611748565b60405180910390f35b61017d610178366004611777565b6103cb565b6040519015158152602001610161565b6101a061019b3660046117a1565b6103e3565b005b6004545b604051908152602001610161565b61017d6101c23660046117bc565b610439565b60405160128152602001610161565b6101a661045f565b61017d6101ec366004611777565b6104ef565b6101a06101ff366004611777565b61052e565b6101a06102123660046117f8565b6105dd565b6101a66102253660046117a1565b6001600160a01b031660009081526002602052604090205490565b6101a661024e3660046117a1565b6001600160a01b031660009081526007602052604090205490565b6001546040516001600160a01b039091168152602001610161565b6101a0610292366004611827565b610646565b610154610694565b61017d6102ad366004611777565b6106a3565b61017d6102c0366004611777565b610740565b6102d86102d33660046118d8565b61074e565b604051610161919061194d565b6101a06102f33660046119af565b610843565b6101a6610306366004611a22565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b6101546109ea565b60606005805461034890611a55565b80601f016020809104026020016040519081016040528092919081815260200182805461037490611a55565b80156103c15780601f10610396576101008083540402835291602001916103c1565b820191906000526020600020905b8154815290600101906020018083116103a457829003601f168201915b5050505050905090565b6000336103d9818585610a78565b5060019392505050565b6103eb610b9d565b61042d5760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b60448201526064015b60405180910390fd5b61043681610bca565b50565b600033610447858285610c29565b610452858585610cbb565b60019150505b9392505050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156104b857507f000000000000000000000000000000000000000000000000000000000000000046145b156104e257507f000000000000000000000000000000000000000000000000000000000000000090565b6104ea610e89565b905090565b3360008181526003602090815260408083206001600160a01b03871684529091528120549091906103d99082908690610529908790611aa0565b610a78565b610536610b9d565b6105825760405162461bcd60e51b815260206004820152601760248201527f4e6f7420617574686f72697a656420746f206d696e742e0000000000000000006044820152606401610424565b806105cf5760405162461bcd60e51b815260206004820152601460248201527f4d696e74696e67207a65726f20746f6b656e732e0000000000000000000000006044820152606401610424565b6105d98282610f1e565b5050565b3360009081526002602052604090205481111561063c5760405162461bcd60e51b815260206004820152601260248201527f6e6f7420656e6f7567682062616c616e636500000000000000000000000000006044820152606401610424565b6104363382610ffd565b61064e610b9d565b61068b5760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610424565b61043681611143565b60606006805461034890611a55565b3360008181526003602090815260408083206001600160a01b0387168452909152812054909190838110156107285760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610424565b6107358286868403610a78565b506001949350505050565b6000336103d9818585610cbb565b60608167ffffffffffffffff81111561076957610769611811565b60405190808252806020026020018201604052801561079c57816020015b60608152602001906001900390816107875790505b50905060005b8281101561083c5761080c308585848181106107c0576107c0611ab8565b90506020028101906107d29190611ace565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061122492505050565b82828151811061081e5761081e611ab8565b6020026020010181905250808061083490611b1c565b9150506107a2565b5092915050565b834211156108935760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610424565b60007f00000000000000000000000000000000000000000000000000000000000000008888886108c28c611249565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061096061091f61045f565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b9050600061097082878787611271565b9050896001600160a01b0316816001600160a01b0316146109d35760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610424565b6109de8a8a8a610a78565b50505050505050505050565b600080546109f790611a55565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2390611a55565b8015610a705780601f10610a4557610100808354040283529160200191610a70565b820191906000526020600020905b815481529060010190602001808311610a5357829003601f168201915b505050505081565b6001600160a01b038316610ada5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610424565b6001600160a01b038216610b3b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610424565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6000610bb16001546001600160a01b031690565b6001600160a01b0316336001600160a01b031614905090565b600180546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b6001600160a01b038381166000908152600360209081526040808320938616835292905220546000198114610cb55781811015610ca85760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610424565b610cb58484848403610a78565b50505050565b6001600160a01b038316610d1f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610424565b6001600160a01b038216610d815760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610424565b6001600160a01b03831660009081526002602052604090205481811015610df95760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610424565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610e30908490611aa0565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e7c91815260200190565b60405180910390a3610cb5565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610eb4610339565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b038216610f745760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610424565b8060046000828254610f869190611aa0565b90915550506001600160a01b03821660009081526002602052604081208054839290610fb3908490611aa0565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b03821661105d5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610424565b6001600160a01b038216600090815260026020526040902054818110156110d15760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610424565b6001600160a01b0383166000908152600260205260408120838303905560048054849290611100908490611b37565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610b90565b600080805461115190611a55565b80601f016020809104026020016040519081016040528092919081815260200182805461117d90611a55565b80156111ca5780601f1061119f576101008083540402835291602001916111ca565b820191906000526020600020905b8154815290600101906020018083116111ad57829003601f168201915b505085519394506111e693600093506020870192509050611657565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a168183604051611218929190611b4e565b60405180910390a15050565b60606104588383604051806060016040528060278152602001611baf60279139611299565b6001600160a01b03811660009081526007602052604090208054600181018255905b50919050565b600080600061128287878787611376565b9150915061128f81611463565b5095945050505050565b60606001600160a01b0384163b6113015760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610424565b600080856001600160a01b03168560405161131c9190611b7c565b600060405180830381855af49150503d8060008114611357576040519150601f19603f3d011682016040523d82523d6000602084013e61135c565b606091505b509150915061136c82828661161e565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156113ad575060009050600361145a565b8460ff16601b141580156113c557508460ff16601c14155b156113d6575060009050600461145a565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561142a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166114535760006001925092505061145a565b9150600090505b94509492505050565b600081600481111561147757611477611b98565b14156114805750565b600181600481111561149457611494611b98565b14156114e25760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610424565b60028160048111156114f6576114f6611b98565b14156115445760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610424565b600381600481111561155857611558611b98565b14156115b15760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610424565b60048160048111156115c5576115c5611b98565b14156104365760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610424565b6060831561162d575081610458565b82511561163d5782518084602001fd5b8160405162461bcd60e51b81526004016104249190611748565b82805461166390611a55565b90600052602060002090601f01602090048101928261168557600085556116cb565b82601f1061169e57805160ff19168380011785556116cb565b828001600101855582156116cb579182015b828111156116cb5782518255916020019190600101906116b0565b506116d79291506116db565b5090565b5b808211156116d757600081556001016116dc565b60005b8381101561170b5781810151838201526020016116f3565b83811115610cb55750506000910152565b600081518084526117348160208601602086016116f0565b601f01601f19169290920160200192915050565b602081526000610458602083018461171c565b80356001600160a01b038116811461177257600080fd5b919050565b6000806040838503121561178a57600080fd5b6117938361175b565b946020939093013593505050565b6000602082840312156117b357600080fd5b6104588261175b565b6000806000606084860312156117d157600080fd5b6117da8461175b565b92506117e86020850161175b565b9150604084013590509250925092565b60006020828403121561180a57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561183957600080fd5b813567ffffffffffffffff8082111561185157600080fd5b818401915084601f83011261186557600080fd5b81358181111561187757611877611811565b604051601f8201601f19908116603f0116810190838211818310171561189f5761189f611811565b816040528281528760208487010111156118b857600080fd5b826020860160208301376000928101602001929092525095945050505050565b600080602083850312156118eb57600080fd5b823567ffffffffffffffff8082111561190357600080fd5b818501915085601f83011261191757600080fd5b81358181111561192657600080fd5b8660208260051b850101111561193b57600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156119a257603f1988860301845261199085835161171c565b94509285019290850190600101611974565b5092979650505050505050565b600080600080600080600060e0888a0312156119ca57600080fd5b6119d38861175b565b96506119e16020890161175b565b95506040880135945060608801359350608088013560ff81168114611a0557600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611a3557600080fd5b611a3e8361175b565b9150611a4c6020840161175b565b90509250929050565b600181811c90821680611a6957607f821691505b6020821081141561126b57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611ab357611ab3611a8a565b500190565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112611ae557600080fd5b83018035915067ffffffffffffffff821115611b0057600080fd5b602001915036819003821315611b1557600080fd5b9250929050565b6000600019821415611b3057611b30611a8a565b5060010190565b600082821015611b4957611b49611a8a565b500390565b604081526000611b61604083018561171c565b8281036020840152611b73818561171c565b95945050505050565b60008251611b8e8184602087016116f0565b9190910192915050565b634e487b7160e01b600052602160045260246000fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212203179c6902cffe821a93e0d54de1fd9b4144346bac924835c5a5cfdd42fe963c464736f6c634300080c0033";

type ERC20BaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20BaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Base__factory extends ContractFactory {
  constructor(...args: ERC20BaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Base> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<ERC20Base>;
  }
  override getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): ERC20Base {
    return super.attach(address) as ERC20Base;
  }
  override connect(signer: Signer): ERC20Base__factory {
    return super.connect(signer) as ERC20Base__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20BaseInterface {
    return new utils.Interface(_abi) as ERC20BaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Base {
    return new Contract(address, _abi, signerOrProvider) as ERC20Base;
  }
}
