import express from 'express';
import { queueController } from '../controller/queue.controller';
// import { IADMIN } from '../types/document/IAdmin';
// import { DeleteAdmin, GetAdmin, SaveReqADMIN, UpdateReqADMIN } from '../types/request/Admin.request';
import { SaveUpdateResORDER } from '../responce/order.res';
import CustomeError from '../utills/error';

export class QueueRoutes {
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
    // this.router.post('/saveadmin', async (req, res, next) => {
    //   try {
    //     const admin: SaveReqADMIN = req.body;
    //     const newAdmin:SaveUpdateResADMIN = await new AdminController().saveadmin(admin);
    //     res.status(200).json({
    //       message: newAdmin
    //     });
    //   } catch (error) {
    //     next(error);
    //   }
    // });
    this.router.post('/orderinqueue', async (req, res, next) => {
      try {
        // const admin: UpdateReqADMIN = req.body;
        const upadated_admin:SaveUpdateResORDER[] = await new queueController().orderinqueue();
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
export const queueRoutesApi = new QueueRoutes().router;