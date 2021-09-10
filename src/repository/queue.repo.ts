import { OrderSchema } from '../model/order.model';
import { IORDER } from '../documents/IORDER';
export class MainQueue {
  constructor() {}
//   getAdmin(_id: string) {
//     return ADMINSchema.findById(_id);
//   }
  showqueue() {
    return OrderSchema.find({isAccepted : false}).populate('user','name email').limit(1)
    // .exec((err,wah)=>{
    //   if(err){
    //     console.log(err,"error")
    //   return err
    //   }
    //   console.log(wah,"wajh")
    //   return wah
    // })
    //.select(['totalPrice']);
  }
//   updateAdmin(Admmin: IADMIN) {
//     return ADMINSchema.findByIdAndUpdate(Admmin._id, Admmin, {
//       new: true
//     });
//   }
//   deletAdmin(_id: string) {
//     return ADMINSchema.findByIdAndDelete(_id);
//   }
//   getAdminslist() {
//    return ADMINSchema.find();
//   }
}