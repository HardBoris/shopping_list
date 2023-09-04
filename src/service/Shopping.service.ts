import { Request } from "express";
import { shoppingRepository } from "../repositories";
import { Shopping } from "../entities";
import { ErrorHandler } from "../errors";

class ShopService {
  ShopCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const compra: Shopping = await shoppingRepository.save({
      ...body,
    });

    return compra;
  };

  ShopLoader = async (req: Request) => {
    let lista: Shopping[] = await shoppingRepository.all();
    lista = lista.sort((a, b) =>
      a.shoppingId > b.shoppingId ? -1 : a.shoppingId < b.shoppingId ? 1 : 0
    );
    return {
      status: 200,
      lista: lista,
    };
  };

  BuyLoader = async (req: Request) => {
    const compra: Shopping = await shoppingRepository.findOne({
      shoppingId: req.params.shoppingId,
    });
    return { status: 200, compra: compra };
  };

  BuyEditor = async (req: Request) => {
    const compra: Shopping = await shoppingRepository.findOne({
      shoppingId: req.params.shoppingId,
    });
    const buyUpdated = {
      ...compra,
    };
    await shoppingRepository.save(buyUpdated);
    return {
      status: 200,
      compra: buyUpdated,
    };
  };

  BuyDeletor = async (req: Request) => {
    const compra: Shopping = await shoppingRepository.findOne({
      shoppingId: req.params.shoppingId,
    });

    if (!compra) {
      throw new ErrorHandler(404, "Buy not found");
    }

    await shoppingRepository.delete(req.params.shoppingId);

    return {
      status: 200,
      message: "Buy deleted",
    };
  };
}

export default new ShopService();
