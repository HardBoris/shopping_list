import { Request } from "express";
import { detailRepository } from "../repositories";
import { Detail } from "../entities";
import { ErrorHandler } from "../errors";

class DetailService {
  DetailCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const detail: Detail = await detailRepository.save({
      ...body,
    });

    return detail;
  };

  DetailListLoader = async (req: Request) => {
    let details: Detail[] = await detailRepository.all();
    details = details.sort((a, b) =>
      a.detailId > b.detailId ? -1 : a.detailId < b.detailId ? 1 : 0
    );
    return {
      status: 200,
      details: details,
    };
  };

  DetailLoader = async (req: Request) => {
    const detail: Detail = await detailRepository.findOne({
      detailId: req.params.detailId,
    });
    return { status: 200, detail: detail };
  };

  DetailEditor = async (req: Request) => {
    const detail: Detail = await detailRepository.findOne({
      detailId: req.params.detailId,
    });
    const detailUpdated = {
      ...detail,
    };
    await detailRepository.save(detailUpdated);
    return {
      status: 200,
      detail: detail,
    };
  };

  DetailDeletor = async (req: Request) => {
    const detail: Detail = await detailRepository.findOne({
      detailId: req.params.detailId,
    });

    if (!detail) {
      throw new ErrorHandler(404, "Detail not found");
    }

    await detailRepository.delete(req.params.detailId);

    return {
      status: 200,
      message: "Detail deleted",
    };
  };
}

export default new DetailService();
