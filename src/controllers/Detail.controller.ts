import { Request, Response } from "express";
import { detailService } from "../services";

class DetailController {
  DetailCreator = async (req: Request, res: Response) => {
    const detail = await detailService.DetailCreator(req);
    return res.status(201).json(detail);
  };
  DetailListLoader = async (req: Request, res: Response) => {
    const { status, details } = await detailService.DetailListLoader(req);
    return res.status(status).json(details);
  };

  DetailLoader = async (req: Request, res: Response) => {
    const { status, detail } = await detailService.DetailLoader(req);
    return res.status(status).json(detail);
  };

  DetailEditor = async (req: Request, res: Response) => {
    const { status, detail } = await detailService.DetailEditor(req);
    return res.status(status).json(detail);
  };

  DetailDeletor = async (req: Request, res: Response) => {
    const { status, message } = await detailService.DetailDeletor(req);
    return res.status(status).json(message);
  };
}

export default new DetailController();
