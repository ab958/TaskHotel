
import { Document } from 'mongoose';
export interface IPERSON extends Document {
  _id:string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  // isWaiter: boolean;
//   adress: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface Login{
  email: string;
  password: string
}
