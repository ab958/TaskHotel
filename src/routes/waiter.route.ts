import express from 'express';
import { WaiterController } from '../controller/waiter.controller';
import { OrderController } from '../controller/order.controller';
// import { IADMIN } from '../types/document/IAdmin';
import { Login} from '../documents/Iperson';
import { PersonSchema } from "../model/person.model"
import { WaiterSchema } from "../model/waiter.model"
import { SaveUpdateResWAITER,Menu } from '../responce/waiter.res';
import { SaveUpdateResORDER } from '../responce/order.res';
import { DeleteWAITER, GetWAITER, SaveReqWAITER,UpdateReqWAITER } from '../requests/waiter.request';
import CustomeError from '../utills/error';
import jwt from "jsonwebtoken";


export class AdminRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    // this.router.post('/getAdmin', async (req, res, next) => {
    //   try {
    //     const getreq:GetAdmin = req.body;
    //       const admin:SaveUpdateResADMIN = await new AdminController().getadmin(getreq);
    //       res.send(admin);
    //   } catch (error) {
    //     next(error);
    //   }
    // });

    this.router.post('/saveWaiter',Admin, async (req, res, next) => {
      try {
        const admin: SaveReqWAITER = req.body;
        const {_id} = res.locals.jwtPayload
        console.log(_id,"wahabbbb")
        const newAdmin:SaveUpdateResWAITER = await new WaiterController().savewaiter(admin);
        res.status(200).json({
          message: newAdmin
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getmenu',waiter, async (req, res, next) => {
        try {
          const adminList: Menu[] = await new WaiterController().menu();
          console.log(req.header('token'),"from waiter")
          res.status(200).json({
            result: adminList
          });
  
        } catch (error) {
          next(error);
        }
      });
    this.router.post('/loginwaiter',async(req, res, next) =>{
      try{
        const admin: Login = req.body;
        const log:any = await new WaiterController().getloginn(admin);
        // console.log(log)
        // const vei = jwt.verify(log,"WAHAB")
        // console.log(vei)
        // res.locals.jwtPayload = vei;
        res.header = <any>log
        // let a=   res.locals.user = res.locals.jwtPayload.data;
// console.log(a)
        // req.User = vei
        // const {_id} = res.locals.jwtPayload
        // console.log(_id,"wahabbbb")
        // req.User = _id
        // console.log(req.header('Tokken'),"from waiter")
        // res.header  = log;
        res.status(200).json({
          Tokken : log
        });
      }catch(e){
        next(e);
      }
    })
    // this.router.post('/getmyorderlist', async (req, res, next) => {
    //     try {
    //       let token:any = req.header('token')
    //     // console.log(token,"from routes")
    //     const vei:any = jwt.verify(token,"WAHAB")
    //     // console.log(vei,"eveve")
    //     const a = res.locals.jwtPayload = vei;
    //     const {_id} = res.locals.jwtPayload
    //       const adminList: SaveUpdateResORDER[] = await new OrderController().getmyorderList(_id);
    //       res.status(200).json({
    //         result: adminList
    //       });
  
    //     } catch (error) {
    //       next(error);
    //     }
    //   });


    // this.router.put('/updateadmin', async (req, res, next) => {
    //   try {
    //     const admin: UpdateReqADMIN = req.body;
    //     const upadated_admin:SaveUpdateResADMIN = await new AdminController().updateAdmin(admin);
    //     const response = {
    //       upadated_admin,
    //     };
    //     res.status(200).json({
    //       message: response
    //     });
    //   } catch (error) {
    //     next(error);
    //   }
    // });
    // this.router.delete('/deleteadmin', async (req, res, next) => {
    //   try {
    //     const delreq:DeleteAdmin = req.body;
    //     const Deleted_admin = await new AdminController().deletadmin(delreq);
    //     res.status(200).json({
    //       message: 'admin deleted'
    //     });
    //   } catch (error) {
    //     next(error);
    //   }
    // });
    // this.router.post('/getadminlist', async (req, res, next) => {
    //   try {
    //     const adminList: SaveUpdateResADMIN[] = await new AdminController().getadminList();
    //     res.status(200).json({
    //       result: adminList
    //     });

    //   } catch (error) {
    //     next(error);
    //   }
    // });
  }
}
export const WaiterRoutesApi = new AdminRoutes().router;

export async function Admin(req:express.Request ,res : express.Response,next: express.NextFunction){
  const token:any = req.header('token');
  if(!token){
    res.send("Access Deniad")
  }
  try{
    const vei = jwt.verify(token,"WAHAB")
    console.log(vei)
    // const a = res.locals.jwtPayload = vei;
    const a = res.locals.jwtPayload = vei;
    // console.log(a,"aaaa")
    const {_id} = res.locals.jwtPayload
    console.log(_id)
    const user = await PersonSchema.findById(_id)
    if( !user ){
      return res.send("User not found")
    }

    console.log(user)
    if(user.isAdmin){
      console.log("admin")
      // admin = 
      next()
    }else{
      return res.send("Access Deniad")
    }

    // const { _id } = vei
    // req.user = _id
    
  }catch(e){
    res.send("invalid Token")
  }

}

export async function waiter(req:express.Request ,res : express.Response,next: express.NextFunction){
  const token:any = req.header('token');
  if(!token){
    res.send("Access Deniad")
  }
  try{
    const vei = jwt.verify(token,"WAHAB")
    // console.log(vei)
    // const a = res.locals.jwtPayload = vei;
    const a = res.locals.jwtPayload = vei;
    // console.log(a,"aaaa")
    const {_id} = res.locals.jwtPayload
    console.log(_id)
    const user = await WaiterSchema.findById(_id)
    console.log(user)

    if( !user ){
      return res.send("User not found")
    }

    console.log(user)
    if(user.isWaiter){
      next()
    }else{
      return res.send("Access Deniad")
    }

    // const { _id } = vei
    // req.user = _id
    
  }catch(e){
    res.send("invalid Token")
  }

}