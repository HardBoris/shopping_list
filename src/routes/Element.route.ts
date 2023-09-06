import { Router } from "express";
import { elementController } from "../controllers";

const elementRouter = Router();

elementRouter.post("/elements/register", elementController.ElementCreator);
elementRouter.get("/elements", elementController.ElementListLoader);
elementRouter.get("/elements/:id", elementController.ElementLoader);

elementRouter.patch("/elements/:id", elementController.ElementEditor);

elementRouter.delete("/elements/:id", elementController.ElementDeletor);

export default elementRouter;
