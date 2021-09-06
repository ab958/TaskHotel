import { Document } from 'mongoose';
export interface IPRODUCT extends Document {
  _id:string;
  name: string;
  price: string;
  type: string;
  size: string;
  // JoinDate: string;
  // adress: string;
  createdAt?: string;
  updatedAt?: string;
}

