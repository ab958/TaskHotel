export interface SaveReqPERSON{
    // _id:string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    // isWaiter: boolean;
  }
  export interface UpdateReqPERSON {
    _id:string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    // isWaiter: boolean;
  }
  export interface GetPERSON {
    id: string
  }
  export interface DeletePERSON {
    id: string
  }
  