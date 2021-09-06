import express from 'express';
import { OrderController } from '../controller/order.controller';
import { order } from '../documents/IORDER';
import { DeleteORDER, GetORDER, SaveReqORDER, UpdateReqORDER } from '../requests/order.request';
import { SaveUpdateResORDER } from '../responce/order.res';
import CustomeError from '../utills/error';
import jwt from "jsonwebtoken";


export class AdminRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/getOrder', async (req, res, next) => {
      try {
        const getreq:GetORDER = req.body;
          const admin:SaveUpdateResORDER = await new OrderController().getadmin(getreq);
          res.send(admin);
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/saveOrder', async (req, res, next) => {
      try {
        // const admin: SaveReqORDER = req.body;
        const admin: order[] = req.body;
        // const {_id} = res.locals.jwtPayload
        // const token:any = req.header('token');
        // console.log(token,"token")
        // const vei = jwt.verify(token,"WAHAB")
       
        // const a = res.locals.jwtPayload = vei;
      //  res.locals.jwtPayload = vei;
        // console.log(a,"aaaa")
        // const {_id} = res.locals.jwtPayload
        // console.log(_id)
        // console.log(admin,_id)
        // let totalamount = 0
        // for(let i =0;i<admin.length;i++){
        //   totalamount = totalamount + admin[i].price 
        // }
        // const data = {
        //   "user" : "6136064563cc83ec38cc3336",
        //   "orderItems" : admin,
        //   "totalPrice" : totalamount
        //  }
        let user = req.User
        console.log(user,"from routes")
        // let user = OrderController.getuser(user)
        const newAdmin:SaveUpdateResORDER = await new OrderController(user).saveadmin(admin);
        res.status(200).json({
          message: newAdmin
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.put('/updateOrder', async (req, res, next) => {
      try {
        const admin: UpdateReqORDER = req.body;
        const upadated_admin:SaveUpdateResORDER = await new OrderController().updateAdmin(admin);
        const response = {
          upadated_admin,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deleteOrder', async (req, res, next) => {
      try {
        const delreq:DeleteORDER = req.body;
        const Deleted_admin = await new OrderController().deletadmin(delreq);
        res.status(200).json({
          message: 'admin deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getOrderlist', async (req, res, next) => {
      try {
        const adminList: SaveUpdateResORDER[] = await new OrderController().getadminList();
        res.status(200).json({
          result: adminList
        });

      } catch (error) {
        next(error);
      }
    });
  }
}
export const OrderRoutesApi = new AdminRoutes().router;