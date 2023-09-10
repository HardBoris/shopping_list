import { Request, Response } from "express";
import { stuffService } from "../services";

class StuffController {
  StuffCreator = async (req: Request, res: Response) => {
    const stuff = await stuffService.StuffCreator(req);
    return res.status(201).json(stuff);
  };
  StuffListLoader = async (req: Request, res: Response) => {
    const { status, profiles } = await stuffService.StuffListLoader(req);
    return res.status(status).json(profiles);
  };

  StuffLoader = async (req: Request, res: Response) => {
    const { status, profile } = await stuffService.StuffLoader(req);
    return res.status(status).json(profile);
  };

  StuffEditor = async (req: Request, res: Response) => {
    const { status, profile } = await stuffService.StuffEditor(req);
    return res.status(status).json(profile);
  };

  StuffDeletor = async (req: Request, res: Response) => {
    const { status, message } = await stuffService.StuffDeletor(req);
    return res.status(status).json(message);
  };
}

export default new StuffController();
