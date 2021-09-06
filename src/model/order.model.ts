import mongoose,{ Schema, model } from 'mongoose';
import { IORDER } from '../documents/IORDER';
const IADMINSchema = new Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      orderItems: [
        {
          name: { type: String, required: true },
          price: { type: Number, required: true },
          type: { type: String, required: true },
          size: { type: Number, required: true },
        //   product: {
        //     type: mongoose.Schema.Types.ObjectID,
        //     required: true,
        //     ref: "Product",
        //   },
        },
      ],
      totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      isAccepted: {
        type: Boolean,
        required: true,
        default: false,
      },
      deliveredAt: {
        type: Date,
      },
    },
  { timestamps: true }
);
export const OrderSchema = model<IORDER>('IORDERSchema', IADMINSchema);