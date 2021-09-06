export interface SaveReqWAITER{
    // _id:string;
    name: string;
    email: string;
    password: string;
    // isAdmin: boolean;
    isWaiter: boolean;
  }
  export interface UpdateReqWAITER {
    _id:string;
    name: string;
    email: string;
    password: string;
    // isAdmin: boolean;
    isWaiter: boolean;
  }
  export interface GetWAITER {
    id: string
  }
  export interface DeleteWAITER {
    id: string
  }