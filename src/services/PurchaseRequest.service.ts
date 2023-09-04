import { Request } from "express";
import { prRepository } from "../repositories";
import { PurchaseRequest } from "../entities";
import { ErrorHandler } from "../errors";

class PurchaseRequestService {
  PRCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const prequest: PurchaseRequest = await prRepository.save({
      ...body,
    });

    return prequest;
  };

  PRListLoader = async (req: Request) => {
    let lista: PurchaseRequest[] = await prRepository.all();
    lista = lista.sort((a, b) =>
      a.prId > b.prId ? -1 : a.prId < b.prId ? 1 : 0
    );
    return {
      status: 200,
      lista: lista,
    };
  };

  PRLoader = async (req: Request) => {
    const prequest: PurchaseRequest = await prRepository.findOne({
      prId: req.params.prId,
    });
    return { status: 200, prequest: prequest };
  };

  PREditor = async (req: Request) => {
    const prequest: PurchaseRequest = await prRepository.findOne({
      prId: req.params.prId,
    });
    const prUpdated = {
      ...prequest,
    };
    await prRepository.save(prUpdated);
    return {
      status: 200,
      prequest: prUpdated,
    };
  };

  PRDeletor = async (req: Request) => {
    const prequest: PurchaseRequest = await prRepository.findOne({
      prId: req.params.prId,
    });

    if (!prequest) {
      throw new ErrorHandler(404, "Purchase Request not found");
    }

    await prRepository.delete(req.params.prId);

    return {
      status: 200,
      message: "Purchase Request deleted",
    };
  };
}

export default new PurchaseRequestService();
