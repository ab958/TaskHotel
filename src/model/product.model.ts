import { Schema, model } from 'mongoose';
import { IPRODUCT } from '../documents/IPRODUCT';
const IADMINSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
      },
    //   name: { type: String, required: true },
      price: { type: Number, required: true },
      typee: { type: String, required: true },
      size: { type: Number, required: true },
    
  },
  { timestamps: true }
);
export const ProductSchema = model<IPRODUCT>('IPRODUCTSchema', IADMINSchema);