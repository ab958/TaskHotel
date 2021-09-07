import { Document } from 'mongoose';

export interface order{
    name: string,
    price: number,
    type: any,
    size: number,
    //     product: {
    //       type: mongoose.Schema.Types.ObjectID,
    //       required: true,
    //       ref: "Product",
    //     },
}

export interface IORDER extends Document {
  _id:string;
  user : string;
  orderItems: order[];
  totalPrice: number;
  isAccepted: boolean;
  deliveredAt: Date;
//   JoinDate: string;
//   adress: string;
  createdAt?: string;
  updatedAt?: string;
}


    // orderItems: [
    //   {
    //     name: { type: String, required: true },
    //     price: { type: Number, required: true },
    //     typee: { type: String, required: true },
    //     size: { type: Number, required: true },
    //     product: {
    //       type: mongoose.Schema.Types.ObjectID,
    //       required: true,
    //       ref: "Product",
    //     },
    //   },
    // ],