/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Faucet, FaucetInterface } from "../../contracts/Faucet";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
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
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimAmount",
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
    name: "claimInterval",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getFaucetBalance",
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
        name: "",
        type: "address",
      },
    ],
    name: "lastClaimed",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052662386f26fc1000060015562015180600255348015602157600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506109ff806100716000396000f3fe60806040526004361061007b5760003560e01c8063830953ab1161004e578063830953ab146101285780638da5cb5b14610153578063d0e30db01461017e578063f1f959a6146101885761007b565b8063013eba92146100805780630b433a12146100bd5780632e1a7d4d146100e85780634e71d92d14610111575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a29190610655565b6101b3565b6040516100b4919061069b565b60405180910390f35b3480156100c957600080fd5b506100d26101cb565b6040516100df919061069b565b60405180910390f35b3480156100f457600080fd5b5061010f600480360381019061010a91906106e2565b6101d1565b005b34801561011d57600080fd5b5061012661037a565b005b34801561013457600080fd5b5061013d61052d565b60405161014a919061069b565b60405180910390f35b34801561015f57600080fd5b50610168610533565b604051610175919061071e565b60405180910390f35b610186610557565b005b34801561019457600080fd5b5061019d6105ea565b6040516101aa919061069b565b60405180910390f35b60036020528060005260406000206000915090505481565b60025481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461025f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025690610796565b60405180910390fd5b804710156102a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029990610802565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610308573d6000803e3d6000fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d58260405161036f919061069b565b60405180910390a250565b6001544710156103bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b69061086e565b60405180910390fd5b600254600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461040c91906108bd565b42101561044e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104459061093d565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc6001549081150290604051600060405180830381858888f193505050501580156104da573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a600154604051610523919061069b565b60405180910390a2565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000341161059a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610591906109a9565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4346040516105e0919061069b565b60405180910390a2565b600047905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610622826105f7565b9050919050565b61063281610617565b811461063d57600080fd5b50565b60008135905061064f81610629565b92915050565b60006020828403121561066b5761066a6105f2565b5b600061067984828501610640565b91505092915050565b6000819050919050565b61069581610682565b82525050565b60006020820190506106b0600083018461068c565b92915050565b6106bf81610682565b81146106ca57600080fd5b50565b6000813590506106dc816106b6565b92915050565b6000602082840312156106f8576106f76105f2565b5b6000610706848285016106cd565b91505092915050565b61071881610617565b82525050565b6000602082019050610733600083018461070f565b92915050565b600082825260208201905092915050565b7f4e6f7420746865206f776e657200000000000000000000000000000000000000600082015250565b6000610780600d83610739565b915061078b8261074a565b602082019050919050565b600060208201905081810360008301526107af81610773565b9050919050565b7f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000600082015250565b60006107ec601283610739565b91506107f7826107b6565b602082019050919050565b6000602082019050818103600083015261081b816107df565b9050919050565b7f46617563657420697320656d7074790000000000000000000000000000000000600082015250565b6000610858600f83610739565b915061086382610822565b602082019050919050565b600060208201905081810360008301526108878161084b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108c882610682565b91506108d383610682565b92508282019050808211156108eb576108ea61088e565b5b92915050565b7f5761697420323420686f757273206265666f7265206e65787420636c61696d00600082015250565b6000610927601f83610739565b9150610932826108f1565b602082019050919050565b600060208201905081810360008301526109568161091a565b9050919050565b7f4d757374206465706f7369742045544800000000000000000000000000000000600082015250565b6000610993601083610739565b915061099e8261095d565b602082019050919050565b600060208201905081810360008301526109c281610986565b905091905056fea2646970667358221220d1bf8d68ac5d2732e166df5e197d567334c22a11b32ffeaf1e13b189c310867964736f6c634300081c0033";

type FaucetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FaucetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Faucet__factory extends ContractFactory {
  constructor(...args: FaucetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Faucet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Faucet__factory {
    return super.connect(runner) as Faucet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FaucetInterface {
    return new Interface(_abi) as FaucetInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Faucet {
    return new Contract(address, _abi, runner) as unknown as Faucet;
  }
}
