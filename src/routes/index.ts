import { Express } from "express";
import prRouter from "./PurchaseRequest.route";
import userRouter from "./User.route";

const registerRouters = (app: Express): void => {
  app.use(userRouter);
  app.use(prRouter);
};

export default registerRouters;
