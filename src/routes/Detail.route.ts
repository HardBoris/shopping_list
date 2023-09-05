import { Router } from "express";
import { detailController } from "../controllers";

const detailRouter = Router();

detailRouter.post("/details/register", detailController.DetailCreator);
detailRouter.get("/details", detailController.DetailListLoader);
detailRouter.get("/details/:id", detailController.DetailLoader);

detailRouter.patch("/details/:id", detailController.DetailEditor);

detailRouter.delete("/details/:id", detailController.DetailDeletor);

export default detailRouter;
