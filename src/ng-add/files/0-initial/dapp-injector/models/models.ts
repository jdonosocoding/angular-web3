import { Contract, providers, Signer } from "ethers";
import { AngularContract } from "../classes/contract";
import { INETWORK, NETWORK_TYPE } from "../constants";



export interface IDAPP_CONFIG {
  defaultNetwork: string,
  wallet: 'wallet' | 'privKey' | 'burner',
}

export interface IDAPP_STATE {
  
  defaultProvider:providers.JsonRpcProvider | null;
  connectedNetwork:string | null

  signer: Signer | null,
  signerAddress:string | null,

  defaultContract:AngularContract | null,
  viewContract :AngularContract | null,
}


export interface IABI_OBJECT {
  inputs?: Array<{ internalType: string; name: string; type: string }>;
  outputs?: Array<{ internalType: string; name: string; type: string }>;
  stateMutability?: 'view' | 'nonpayable' | 'payable' | 'pure' ;
  type?: 'function' | 'constructor' | 'event' | 'receive';
  name?: string;
}

export interface BlockWithTransactions extends Omit<providers.Block , 'transactions'> {
  transactions: Array<providers.TransactionResponse>;

}


export interface ICONTRACT_METADATA {
  address:string;
  name:string;
  abi:Array<IABI_OBJECT>;
  network: string;
}



export interface IBALANCE {
  ether: string;
  usd:string;
}

export interface IINPUT_EVENT {
  function: string;
  state: string;
  outputs: Array<any>;
  args: any;
}


export interface IFUNCION_CALL_RESULT {
  success:boolean,
  message:string

}


export interface ITRANSACTION_RESULT {
  success:boolean,
  success_result?:ITRANSACTION_DETAILS,
  error_message?:string
  success_message?:string;

}

export interface ITRANSACTION_DETAILS  {
    txhash: string
    bknr: number,
    from: string
    gas: string
    to: string
    value: string
}