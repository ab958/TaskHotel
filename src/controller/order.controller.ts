import { IORDER,order } from '../documents/IORDER';
import { MainOrder } from '../repository/order.repo';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse,Security } from "tsoa";
import { SaveUpdateResORDER } from '../responce/order.res';
import { DeleteORDER, GetORDER, SaveReqORDER,UpdateReqORDER } from '../requests/order.request';
@Route('Order')
@Tags('order')
export class OrderController {
  User:any
  constructor(user ?: any) {
    this.User = user
   }
  // @Post("/getorder")
  // async getadmin(@Body() getreq:GetORDER): Promise<SaveUpdateResORDER> {
  //   const admin = await new MainOrder().getOrder(getreq.id);
  //   if (admin === null) throw new CustomeError(404, 'Admin not found');
  //   return <SaveUpdateResORDER>admin;
  // }
  /**
   * You will be able to register but if the user already exists then it will generate 500 error with message User already exist
   * @summary You will be able to register user and generate the accessToken with it
   */
  @Security('api_key')
  @Post('/saveOrder')
  async saveadmin(@Body() admin: order[],): Promise<SaveUpdateResORDER> {
    console.log(this.User,"from controller")
    let totalamount = 0
        for(let i =0;i<admin.length;i++){
          totalamount = totalamount + admin[i].price 
        }
        console.log(admin,"from repo")
        const data = {
          "user" : this.User,
          "orderItems" : admin,
          "totalPrice" : totalamount
         }
         
    const new_admin = await new MainOrder().saveOrder(<IORDER>(data));
    return <IORDER>(new_admin);
  }
  @Security('api_key')
  @Post('/getmyorderlist')
  async getmyorderList(): Promise<SaveUpdateResORDER[]> {
    const admin: IORDER[] = await new MainOrder().myorder(this.User);
    return <SaveUpdateResORDER[]>(admin);
  }
  @Security('api_key')
  @Post('/getallorderlist')
  async getallorderList(): Promise<SaveUpdateResORDER[]> {
    const admin: IORDER[] = await new MainOrder().getAllOrderslist();
    return <SaveUpdateResORDER[]>(admin);
  }
  @Security('api_key')
  @Post("/AcceptOrder")
  async accpetadmin(@Body() getreq:GetORDER): Promise<SaveUpdateResORDER> {
    const admin = await new MainOrder().getOrder(getreq.id);
    if (admin === null) throw new CustomeError(404, 'Admin not found');
    return <SaveUpdateResORDER>admin;
  }
  // @Put('/updateorder')
  // async updateAdmin(@Body() admin: UpdateReqORDER): Promise<SaveUpdateResORDER> {
  //   const update_admin  = await new MainOrder().updateOrder(<IORDER>(admin));
  //   if (update_admin === null)
  //     throw new CustomeError(400, 'Admin not updated');
  //   return <SaveUpdateResORDER>update_admin;
  // }
  // @Delete('/deleteorder')
  // @SuccessResponse("200","Admin deleted")
  // async deletadmin(@Body() delreq: DeleteORDER) {
  //   return await new MainOrder().deletOrder(delreq.id);
  // }
  // @Post('/getorderlist')
  // async getadminList(): Promise<SaveUpdateResORDER[]> {
  //   const admin: IORDER[] = await new MainOrder().getOrderslist();
  //   return <SaveUpdateResORDER[]>(admin);
  // }
}