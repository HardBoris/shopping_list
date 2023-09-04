import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { PurchaseRequest } from "../entities";

interface IPurchaseRequestRepo {
  save: (request: Partial<PurchaseRequest>) => Promise<PurchaseRequest>;
  all: () => Promise<PurchaseRequest[]>;
  findOne: (payload: object) => Promise<PurchaseRequest>;
  delete: (id: string) => Promise<DeleteResult>;
}

class PurchaseRequestRepo implements IPurchaseRequestRepo {
  private ormRepo: Repository<PurchaseRequest>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(PurchaseRequest);
  }

  save = async (request: Partial<PurchaseRequest>) =>
    await this.ormRepo.save(request);
  all = async () => await this.ormRepo.find({ relations: { requestor: true } });
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new PurchaseRequestRepo();
