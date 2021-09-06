import { IWAITER} from '../documents/waiter';
import { Login} from '../documents/Iperson';
import { MainWaiter } from '../repository/waiter.repo';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse,Security } from "tsoa";
import { SaveUpdateResWAITER,Menu } from '../responce/waiter.res';
import { gettoken } from '../responce/person.res';
import { DeleteWAITER, GetWAITER, SaveReqWAITER,UpdateReqWAITER } from '../requests/waiter.request';
import jwt from "jsonwebtoken";

@Route('Waiter')
@Tags('waiter')
export class WaiterController {
  constructor() { }
//   @Post("/getAdmin")
//   async getadmin(@Body() getreq:GetAdmin): Promise<SaveUpdateResADMIN> {
//     const admin: IWAITER = await new MainAdmin().getAdmin(getreq.id);
//     if (admin === null) throw new CustomeError(404, 'Admin not found');
//     return <SaveUpdateResADMIN>admin;
//   }
@Security('api_key')
  @Post('/saveWaiter')
  async savewaiter(@Body() admin: SaveReqWAITER): Promise<SaveUpdateResWAITER> {
    const new_admin:IWAITER = await new MainWaiter().saveWaiter(<IWAITER>(admin));
    return <SaveUpdateResWAITER>(new_admin);
  }

@Security('api_key')
  @Post('/getmenu')
  async menu(): Promise<Menu[]> {
    const admin: Menu[] = await new MainWaiter().getmenu();
    return <Menu[]>(admin); 
  }
  @Post('/loginWaiter')
  async getloginn(@Body() getreq:Login):Promise<gettoken>{
    let Person:any  = await new MainWaiter().getlogin(getreq);
    // console.log(Person)
    // console.log(Person === [])
    
    if(Person.length === 0){
      console.log("dfdedf")
      throw new CustomeError(404, 'Person not found')
      // return 0;
    }
    // else if(Person) {
      
      Person = Person[0]._id
    // }
    
      const token:any = jwt.sign({_id :Person},"WAHAB")
      return <gettoken>token;  
    
    
  }

//   @Put('/updateadmin')
//   async updateAdmin(@Body() admin: UpdateReqADMIN): Promise<SaveUpdateResADMIN> {
//     const update_admin:IWAITER = await new MainAdmin().updateAdmin(<IADMIN>(admin));
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
//     const admin: IWAITER[] = await new MainAdmin().getAdminslist();
//     return <SaveUpdateResADMIN[]>(admin);
//   }
}