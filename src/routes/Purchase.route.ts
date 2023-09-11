import { Router } from "express";
import { purchaseController } from "../controllers";

const purchaseRouter = Router();

purchaseRouter.post("/purchases/register", purchaseController.PurchaseCreator);
purchaseRouter.get("/purchases", purchaseController.PurchaseListLoader);
purchaseRouter.get("/purchases/:id", purchaseController.PurchaseLoader);

purchaseRouter.patch("/purchases/:id", purchaseController.PurchaseEditor);

purchaseRouter.delete("/purchases/:id", purchaseController.PurchaseDeletor);

export default purchaseRouter;
