import { Router } from "express";
import { midiaController } from "../controllers";

const midiaRouter = Router();

midiaRouter.post("/midias/register", midiaController.MidiaCreator);
midiaRouter.get("/midias", midiaController.MidiaListLoader);
midiaRouter.get("/midias/:id", midiaController.MidiaLoader);

midiaRouter.patch("/midias/:id", midiaController.MidiaEditor);

midiaRouter.delete("/midias/:id", midiaController.MidiaDeletor);

export default midiaRouter;
