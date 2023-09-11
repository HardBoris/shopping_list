import { Request } from "express";
import { purchaseRepository } from "../repositories";
import { Purchase } from "../entities";
import { ErrorHandler } from "../errors";

class PurchaseService {
  PurchaseCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const purchase: Purchase = await purchaseRepository.save({
      ...body,
    });

    return purchase;
  };

  PurchaseListLoader = async (req: Request) => {
    let purchases: Purchase[] = await purchaseRepository.all();
    purchases = purchases.sort((a, b) =>
      a.purchaseId > b.purchaseId ? -1 : a.purchaseId < b.purchaseId ? 1 : 0
    );
    return {
      status: 200,
      purchases: purchases,
    };
  };

  PurchaseLoader = async (req: Request) => {
    const purchase: Purchase = await purchaseRepository.findOne({
      purchaseId: req.params.purchaseId,
    });
    return { status: 200, purchase: purchase };
  };

  PurchaseEditor = async (req: Request) => {
    const purchase: Purchase = await purchaseRepository.findOne({
      purchaseId: req.params.purchaseId,
    });
    const purchaseUpdated = {
      ...purchase,
    };
    await purchaseRepository.save(purchaseUpdated);
    return {
      status: 200,
      purchase: purchase,
    };
  };

  PurchaseDeletor = async (req: Request) => {
    const purchase: Purchase = await purchaseRepository.findOne({
      purchaseId: req.params.purchaseId,
    });

    if (!purchase) {
      throw new ErrorHandler(404, "Purchase not found");
    }

    await purchaseRepository.delete(req.params.purchaseId);

    return {
      status: 200,
      message: "Purchase deleted",
    };
  };
}

export default new PurchaseService();
