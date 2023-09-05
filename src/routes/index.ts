import { Express } from "express";
import prRouter from "./PurchaseRequest.route";
import userRouter from "./User.route";
import detailRouter from "./Detail.route";

const registerRouters = (app: Express): void => {
  app.use(userRouter);
  app.use(prRouter);
  app.use(detailRouter);
};

export default registerRouters;
