import { Schema, model } from 'mongoose';
import { IPERSON } from "../documents/Iperson";
const IADMINSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        required: true,
        default: false,
      },
      isWaiter: {
        type: Boolean,
        required: true,
        default: true,
      },
  },
  { timestamps: true }
);
export const PersonSchema = model<IPERSON>('IPERSONSchema', IADMINSchema);