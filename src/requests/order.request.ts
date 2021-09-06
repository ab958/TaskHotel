import {order} from "../documents/IORDER";

export interface SaveReqORDER{
    // _id:string;
    user : string;
    orderItems: order[];
    totalPrice: number;
    isAccepted: boolean;
    deliveredAt: Date;
  }
  export interface UpdateReqORDER {
    _id:string;
    user : string;
    orderItems: order[];
    totalPrice: number;
    isAccepted: boolean;
    deliveredAt: Date;
  }
  export interface GetORDER {
    id: string
  }
  export interface DeleteORDER {
    id: string
  }