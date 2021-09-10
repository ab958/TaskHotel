import { IORDER } from '../documents/IORDER';
import { MainQueue } from '../repository/queue.repo';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { SaveUpdateResORDER } from '../responce/order.res';
// import { DeleteAdmin, GetAdmin, SaveReqADMIN,UpdateReqADMIN } from '../types/request/Admin.request';
@Route('queue')
@Tags('queue')
export class queueController {
  constructor() { }
//   @Post("/getAdmin")
//   async getadmin(@Body() getreq:GetAdmin): Promise<SaveUpdateResADMIN> {
//     const admin: IADMIN = await new MainAdmin().getAdmin(getreq.id);
//     if (admin === null) throw new CustomeError(404, 'Admin not found');
//     return <SaveUpdateResADMIN>admin;
//   }
  @Post('/orderinqueue')
  async orderinqueue(): Promise<SaveUpdateResORDER[]> {
    const new_admin:IORDER[] = await new MainQueue().showqueue();
    return <SaveUpdateResORDER[]>(new_admin);
  }
//   @Put('/updateadmin')
//   async updateAdmin(@Body() admin: UpdateReqADMIN): Promise<SaveUpdateResADMIN> {
//     const update_admin:IADMIN = await new MainAdmin().updateAdmin(<IADMIN>(admin));
//     if (update_admin === null)
//       throw new CustomeError(400, 'Admin not updated');
//     return <SaveUpdateResADMIN>update_admin;
//   }
//   @Delete('/deleteadmin')
//   @SuccessResponse("200","Admin deleted")
//   async deletadmin(@Body() delreq: DeleteAdmin) {
//     return await new MainAdmin().deletAdmin(delreq.id);
//   }
//   @Post('/getadminlist')
//   async getadminList(): Promise<SaveUpdateResADMIN[]> {
//     const admin: IADMIN[] = await new MainAdmin().getAdminslist();
//     return <SaveUpdateResADMIN[]>(admin);
//   }
}