import { OrderSchema } from '../model/order.model';
import { IORDER } from '../documents/IORDER';
export class MainOrder {
  constructor() {}
  getOrder(_id: string) {
    return OrderSchema.findById(_id);
  }
  saveOrder(Order: IORDER) {
    return new OrderSchema(Order).save();
  }
  updateOrder(Admmin: IORDER) {
    return OrderSchema.findByIdAndUpdate(Admmin._id, Admmin, {
      new: true
    });
  }
  deletOrder(_id: string) {
    return OrderSchema.findByIdAndDelete(_id);
  }
  getOrderslist() {
   return OrderSchema.find();
  }
}