import express from 'express';
import { PersonController } from '../controller/person.controller';
import { Login } from '../documents/Iperson';
// import { DeleteAdmin, GetAdmin, SaveReqADMIN, UpdateReqADMIN } from '../types/request/Admin.request';
import {SaveReqPERSON,UpdateReqPERSON,GetPERSON,DeletePERSON } from "../requests/person.request";
import { SaveUpdateResPERSON } from '../responce/person.res';
import CustomeError from '../utills/error';
import jwt from "jsonwebtoken";

export class AdminRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    // this.router.post('/getperson', async (req, res, next) => {
    //   try {
    //     const getreq:GetPERSON = req.body;
    //       const admin:SaveUpdateResPERSON = await new PersonController().getPerson(getreq);
    //       res.send(admin);
    //   } catch (error) {
    //     next(error);
    //   }
    // });
    this.router.post('/loginperson',async(req, res, next) =>{
      try{
        const admin: Login = req.body;
        const log = await new PersonController().getloginn(admin);
        // console.log(log)
        res.status(200).json({
          Tokken : log
        });
      }catch(e){
        next(e);
      }
    })
    this.router.post('/saveperson', async (req, res, next) => {
      try {
        const admin: SaveReqPERSON = req.body;
        const newAdmin:SaveUpdateResPERSON = await new PersonController().savePerson(admin);
        res.status(200).json({
          message: newAdmin
        });
      } catch (error) {
        next(error);
      }
    });
    // this.router.put('/updateperson', async (req, res, next) => {
    //   try {
    //     const admin: UpdateReqPERSON = req.body;
    //     const upadated_admin:SaveUpdateResPERSON = await new PersonController().updatePerson(admin);
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
    // this.router.delete('/deleteperson', async (req, res, next) => {
    //   try {
    //     const delreq:DeletePERSON = req.body;
    //     const Deleted_admin = await new PersonController().deletPerson(delreq);
    //     res.status(200).json({
    //       message: 'admin deleted'
    //     });
    //   } catch (error) {
    //     next(error);
    //   }
    // });
    // this.router.post('/getpersonlist', async (req, res, next) => {
    //   try {
    //     const adminList: SaveUpdateResPERSON[] = await new PersonController().getPersonList();
    //     res.status(200).json({
    //       result: adminList
    //     });

    //   } catch (error) {
    //     next(error);
    //   }
    // });
  }
}
export const PersonRoutesApi = new AdminRoutes().router;

