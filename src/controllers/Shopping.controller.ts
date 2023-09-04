import { Request, Response } from "express";
import { prService } from "../services";

class PurchaseRequestController {
  PRCreator = async (req: Request, res: Response) => {
    const prequest = await prService.PRCreator(req);
    return res.status(201).json(prequest);
  };
  PRListLoader = async (req: Request, res: Response) => {
    const { status, lista } = await prService.PRListLoader(req);
    return res.status(status).json(lista);
  };

  PRLoader = async (req: Request, res: Response) => {
    const { status, prequest } = await prService.PRLoader(req);
    return res.status(status).json(prequest);
  };

  PREditor = async (req: Request, res: Response) => {
    const { status, prequest } = await prService.PREditor(req);
    return res.status(status).json(prequest);
  };

  PRDeletor = async (req: Request, res: Response) => {
    const { status, message } = await prService.PRDeletor(req);
    return res.status(status).json(message);
  };
}

export default new PurchaseRequestController();
