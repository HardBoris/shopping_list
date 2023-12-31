import { Express } from "express";
import prRouter from "./PurchaseRequest.route";
import userRouter from "./User.route";
import detailRouter from "./Detail.route";
import elementRouter from "./Element.route";
import midiaRouter from "./Midia.route";
import stuffRouter from "./Stuff.route";
import purchaseRouter from "./Purchase.route";
import partnerRouter from "./Partner.route";

const registerRouters = (app: Express): void => {
  app.use(userRouter);
  app.use(prRouter);
  app.use(detailRouter);
  app.use(elementRouter);
  app.use(midiaRouter);
  app.use(stuffRouter);
  app.use(purchaseRouter);
  app.use(partnerRouter);
};

export default registerRouters;
