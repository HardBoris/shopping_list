import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Purchase } from "../entities";

interface IPurchaseRepo {
  save: (order: Partial<Purchase>) => Promise<Purchase>;
  all: () => Promise<Purchase[]>;
  findOne: (payload: object) => Promise<Purchase>;
  delete: (id: string) => Promise<DeleteResult>;
}

class PurchaseRepo implements IPurchaseRepo {
  private ormRepo: Repository<Purchase>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Purchase);
  }

  save = async (order: Partial<Purchase>) => await this.ormRepo.save(order);
  all = async () => await this.ormRepo.find({ relations: { prequest: true } });
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new PurchaseRepo();
