import { order } from "../documents/IORDER"

export interface SaveUpdateResORDER {
    _id:string;
    user : string;
    orderItems: order[];
    totalPrice: number;
    isAccepted: boolean;
    deliveredAt: Date;
    createdAt?: string;
    updatedAt?: string;
  }