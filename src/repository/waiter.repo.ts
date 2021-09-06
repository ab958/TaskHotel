import { WaiterSchema } from '../model/waiter.model';
import { IWAITER } from '../documents/waiter';
import { Login } from '../documents/Iperson';
import { products } from "./product"
export class MainWaiter {
  constructor() {}
//   getAdmin(_id: string) {
//     return WaiterSchema.findById(_id);
//   }
  saveWaiter(Waiter: IWAITER) {
    return new WaiterSchema(Waiter).save();
  }
  getmenu(){
    return products
  }
  getlogin(login:Login ){
    return WaiterSchema.find(login)
  }
//   updateAdmin(Admmin: IWAITER) {
//     return WaiterSchema.findByIdAndUpdate(Admmin._id, Admmin, {
//       new: true
//     });
//   }
//   deletAdmin(_id: string) {
//     return WaiterSchema.findByIdAndDelete(_id);
//   }
//   getAdminslist() {
//    return WaiterSchema.find();
//   }
}