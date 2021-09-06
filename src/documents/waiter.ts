import { Document } from 'mongoose';
export interface IWAITER extends Document {
  _id:string;
  name: string;
  email: string;
  password: string;
//   isAdmin: boolean;
  isWaiter: boolean;
//   adress: string;
  createdAt?: string;
  updatedAt?: string;
}
