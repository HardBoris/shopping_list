import { Router } from "express";
import { partnerController } from "../controllers";

const partnerRouter = Router();

partnerRouter.post("/partners/register", partnerController.PartnerCreator);
partnerRouter.get("/partners", partnerController.PartnerListLoader);
partnerRouter.get("/partners/:id", partnerController.PartnerLoader);

partnerRouter.patch("/partners/:id", partnerController.PartnerEditor);

partnerRouter.delete("/partners/:id", partnerController.PartnerDeletor);

export default partnerRouter;
