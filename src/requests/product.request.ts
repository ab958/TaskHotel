import {order} from "../documents/IORDER";

export interface SaveReqPRODUCT{
    _id:string;
    name: string;
    price: string;
    type: string;
    size: string;
  }
  export interface UpdateReqPRODUCT {
    _id:string;
    name: string;
    price: string;
    type: string;
    size: string;
  }
  export interface GetPRODUCT {
    id: string
  }
  export interface DeletePRODUCT {
    id: string
  }