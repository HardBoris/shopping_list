import { Router } from "express";
import { prController } from "../controllers";

const prRouter = Router();

prRouter.post("/purchaserequests/register", prController.PRCreator);
prRouter.get("/purchaserequests", prController.PRListLoader);
prRouter.get("/purchaserequests/:prId", prController.PRLoader);

prRouter.patch("/purchaserequests/:prId", prController.PREditor);

prRouter.delete("/purchaserequests/:prId", prController.PRDeletor);

export default prRouter;
