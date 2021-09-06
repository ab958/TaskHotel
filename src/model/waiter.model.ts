import { Schema, model } from 'mongoose';
import { IWAITER } from "../documents/waiter";
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
      isWaiter: {
        type: Boolean,
        required: true,
        default: false,
      },
      // ss
  },
  { timestamps: true }
);
export const WaiterSchema = model<IWAITER>('IWAITERSchema', IADMINSchema);