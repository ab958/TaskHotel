export interface SaveUpdateResWAITER {
    _id:string;
    name: string;
    email: string;
    password: string;
    // isAdmin: boolean;
    isWaiter: boolean;
    createdAt?: string;
    updatedAt?: string;
  }

export interface Menu{
  name: string,
      type: string,
    //   category: "Electronics",
      price: number,
}  

  // export interface gettoken{
  //   token: string;
  // }