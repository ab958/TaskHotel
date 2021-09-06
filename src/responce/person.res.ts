export interface SaveUpdateResPERSON {
    _id:string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    // isWaiter: boolean;
    createdAt?: string;
    updatedAt?: string;
  }

  export interface gettoken{
    token: string;
  }