import { Request, Response } from "express";
import { midiaService } from "../services";

class MidiaController {
  MidiaCreator = async (req: Request, res: Response) => {
    const midia = await midiaService.MidiaCreator(req);
    return res.status(201).json(midia);
  };
  MidiaListLoader = async (req: Request, res: Response) => {
    const { status, profiles } = await midiaService.MidiaListLoader(req);
    return res.status(status).json(profiles);
  };

  MidiaLoader = async (req: Request, res: Response) => {
    const { status, profile } = await midiaService.MidiaLoader(req);
    return res.status(status).json(profile);
  };

  MidiaEditor = async (req: Request, res: Response) => {
    const { status, profile } = await midiaService.MidiaEditor(req);
    return res.status(status).json(profile);
  };

  MidiaDeletor = async (req: Request, res: Response) => {
    const { status, message } = await midiaService.MidiaDeletor(req);
    return res.status(status).json(message);
  };
}

export default new MidiaController();
