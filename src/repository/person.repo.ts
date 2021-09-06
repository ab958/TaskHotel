import { PersonSchema } from '../model/person.model';
import { IPERSON,Login } from '../documents/Iperson';
export class MainPerson {
  constructor() {}
  getPerson(_id: string) {
    // let wahab:any = PersonSchema.findById(_id)
    // console.log(wahab);
    return PersonSchema.findById(_id);
  }
  getlogin(login:Login ){
    // console.log(login,"login")
    // console.log(PersonSchema.findById(),"login2")
    return PersonSchema.find(login)
  }
  savePerson(person: IPERSON) {
    return new PersonSchema(person).save();
  }
  updatePerson(Admmin: IPERSON) {
    return PersonSchema.findByIdAndUpdate(Admmin._id, Admmin, {
      new: true
    });
  }
  deletPerson(_id: string) {
    return PersonSchema.findByIdAndDelete(_id);
  }
  getPersonslist() {
   return PersonSchema.find();
  }
}