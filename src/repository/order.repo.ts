import { OrderSchema } from '../model/order.model';
import { IORDER,order } from '../documents/IORDER';
import jwt from "jsonwebtoken";

export class MainOrder {
  constructor() {}
  getOrder(_id: string) {
    return OrderSchema.findById(_id);
  }
  saveOrder(Order: order[],user:any) {
    // console.log(Order)
    let totalamount = 0
        for(let i =0;i<Order.length;i++){
          totalamount = totalamount + Order[i].price 
        }
        console.log(user,"from repo")
        const data = {
          "user" : user,
          "orderItems" : Order,
          "totalPrice" : totalamount
         }
    return new OrderSchema(data).save();
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