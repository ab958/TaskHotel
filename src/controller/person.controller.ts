import { IPERSON,Login } from '../documents/Iperson';
import { MainPerson } from '../repository/person.repo';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { SaveUpdateResPERSON,gettoken } from '../responce/person.res';
// import { DeletePerson, GetPerson, SaveReqPerson,UpdateReqPerson } from '../requests/person.request';
import {SaveReqPERSON,UpdateReqPERSON,GetPERSON,DeletePERSON } from "../requests/person.request";
import jwt from "jsonwebtoken";

@Route('Person')
@Tags('person')
export class PersonController {
  constructor() { }
  @Post("/getPerson")
  async getPerson(@Body() getreq:GetPERSON): Promise<SaveUpdateResPERSON> {
    const Person  = await new MainPerson().getPerson(getreq.id);
    // console.log(Person,"Person")
    if (Person === null) throw new CustomeError(404, 'Person not found');
    return <SaveUpdateResPERSON>Person;
  }
  @Post('/loginPerson')
  async getloginn(@Body() getreq:Login):Promise<gettoken>{
    let Person:any  = await new MainPerson().getlogin(getreq);
    console.log(Person,"Person")
    if(Person){
      Person = Person._id
    }
    // console.log(getreq,"yeh haijgiojg fdgdfgfd  fd gdf  ")
    if (Person) {
      const token:any = jwt.sign({_id :Person},"WAHAB")
      return <gettoken>token;
      
    }
    else {
      throw new CustomeError(404, 'Person not found')
    }
    // return let wahab:any =<Tokken>Person;
    
        // res.header("token",token)
        // res.send(token)
        // console.log(token ,"Token")
    // let wahab:any =<Tokken>token;
    // console.log(wahab,"wahab")
    // return wahab

    // if (Person === null) throw new CustomeError(404, 'Person not found');
    
  }

  @Post('/savePerson')
  async savePerson(@Body() Person: SaveReqPERSON): Promise<SaveUpdateResPERSON> {
    const new_Person:IPERSON = await new MainPerson().savePerson(<IPERSON>(Person));
    return <SaveUpdateResPERSON>(new_Person);
  }
  @Put('/updatePerson')
  async updatePerson(@Body() Person: UpdateReqPERSON): Promise<SaveUpdateResPERSON> {
    const update_Person  = await new MainPerson().updatePerson(<IPERSON>(Person));
    if (update_Person === null)
      throw new CustomeError(400, 'Person not updated');
    return <SaveUpdateResPERSON>update_Person;
  }
  @Delete('/deletePerson')
  @SuccessResponse("200","Person deleted")
  async deletPerson(@Body() delreq: DeletePERSON) {
    return await new MainPerson().deletPerson(delreq.id);
  }
  @Post('/getPersonlist')
  async getPersonList(): Promise<SaveUpdateResPERSON[]> {
    const Person: IPERSON[] = await new MainPerson().getPersonslist();
    return <SaveUpdateResPERSON[]>(Person);
  }
}