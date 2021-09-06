import { IORDER,order } from '../documents/IORDER';
import { MainOrder } from '../repository/order.repo';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { SaveUpdateResORDER } from '../responce/order.res';
import { DeleteORDER, GetORDER, SaveReqORDER,UpdateReqORDER } from '../requests/order.request';
@Route('Order')
@Tags('order')
export class OrderController {
  User:any
  constructor(user ?: any) {
    this.User = user
   }
  @Post("/getorder")
  async getadmin(@Body() getreq:GetORDER): Promise<SaveUpdateResORDER> {
    const admin = await new MainOrder().getOrder(getreq.id);
    if (admin === null) throw new CustomeError(404, 'Admin not found');
    return <SaveUpdateResORDER>admin;
  }
  @Post('/saveOrder')
  async saveadmin(@Body() admin: order[],): Promise<SaveUpdateResORDER> {
    console.log(this.User,"from controller")
    const new_admin = await new MainOrder().saveOrder(<order[]>(admin),this.User);
    return <SaveUpdateResORDER>(new_admin);
  }
  @Put('/updateorder')
  async updateAdmin(@Body() admin: UpdateReqORDER): Promise<SaveUpdateResORDER> {
    const update_admin  = await new MainOrder().updateOrder(<IORDER>(admin));
    if (update_admin === null)
      throw new CustomeError(400, 'Admin not updated');
    return <SaveUpdateResORDER>update_admin;
  }
  @Delete('/deleteorder')
  @SuccessResponse("200","Admin deleted")
  async deletadmin(@Body() delreq: DeleteORDER) {
    return await new MainOrder().deletOrder(delreq.id);
  }
  @Post('/getorderlist')
  async getadminList(): Promise<SaveUpdateResORDER[]> {
    const admin: IORDER[] = await new MainOrder().getOrderslist();
    return <SaveUpdateResORDER[]>(admin);
  }
}