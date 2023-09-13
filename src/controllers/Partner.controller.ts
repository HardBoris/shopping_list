import { Request, Response } from "express";
import { partnerService } from "../services";

class PartnerController {
  PartnerCreator = async (req: Request, res: Response) => {
    const partner = await partnerService.PartnerCreator(req);
    return res.status(201).json(partner);
  };
  PartnerListLoader = async (req: Request, res: Response) => {
    const { status, partners } = await partnerService.PartnerListLoader(req);
    return res.status(status).json(partners);
  };

  PartnerLoader = async (req: Request, res: Response) => {
    const { status, partner } = await partnerService.PartnerLoader(req);
    return res.status(status).json(partner);
  };

  PartnerEditor = async (req: Request, res: Response) => {
    const { status, partner } = await partnerService.PartnerEditor(req);
    return res.status(status).json(partner);
  };

  PartnerDeletor = async (req: Request, res: Response) => {
    const { status, message } = await partnerService.PartnerDeletor(req);
    return res.status(status).json(message);
  };
}

export default new PartnerController();
