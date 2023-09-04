import { Express } from "express";
import prRouter from "./PurchaseRequest.route";

const registerRouters = (app: Express): void => {
  app.use(prRouter);
};

export default registerRouters;
