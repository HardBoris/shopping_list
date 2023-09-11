import { Request, Response } from "express";
import { purchaseService } from "../services";

class PurchaseController {
  PurchaseCreator = async (req: Request, res: Response) => {
    const purchase = await purchaseService.PurchaseCreator(req);
    return res.status(201).json(purchase);
  };
  PurchaseListLoader = async (req: Request, res: Response) => {
    const { status, purchases } = await purchaseService.PurchaseListLoader(req);
    return res.status(status).json(purchases);
  };

  PurchaseLoader = async (req: Request, res: Response) => {
    const { status, purchase } = await purchaseService.PurchaseLoader(req);
    return res.status(status).json(purchase);
  };

  PurchaseEditor = async (req: Request, res: Response) => {
    const { status, purchase } = await purchaseService.PurchaseEditor(req);
    return res.status(status).json(purchase);
  };

  PurchaseDeletor = async (req: Request, res: Response) => {
    const { status, message } = await purchaseService.PurchaseDeletor(req);
    return res.status(status).json(message);
  };
}

export default new PurchaseController();
