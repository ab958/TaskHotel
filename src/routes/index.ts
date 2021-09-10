import express from 'express';
import { PersonRoutesApi } from "./person.route";
import { OrderRoutesApi } from "./order.route";
import { WaiterRoutesApi } from "./waiter.route";
import { queueRoutesApi } from "./queue.route";
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/Admin',PersonRoutesApi);
        this.router.use('/waiter',WaiterRoutesApi);
        this.router.use('/order',OrderRoutesApi);
        this.router.use('/queue',queueRoutesApi);
       

    }


}
export const MainApi = new MainRouter().router;