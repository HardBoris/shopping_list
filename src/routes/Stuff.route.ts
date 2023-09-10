import { Router } from "express";
import { stuffController } from "../controllers";

const stuffRouter = Router();

stuffRouter.post("/stuffs/register", stuffController.StuffCreator);
stuffRouter.get("/stuffs", stuffController.StuffListLoader);
stuffRouter.get("/stuffs/:id", stuffController.StuffLoader);

stuffRouter.patch("/stuffs/:id", stuffController.StuffEditor);

stuffRouter.delete("/stuffs/:id", stuffController.StuffDeletor);

export default stuffRouter;
