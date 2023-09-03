import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Shopping } from "../entities";

interface IShoppingRepo {
  save: (entrada: Partial<Shopping>) => Promise<Shopping>;
  all: () => Promise<Shopping[]>;
  findOne: (payload: object) => Promise<Shopping>;
  delete: (id: string) => Promise<DeleteResult>;
}

class ShoppingRepo implements IShoppingRepo {
  private ormRepo: Repository<Shopping>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Shopping);
  }

  save = async (entrada: Partial<Shopping>) => await this.ormRepo.save(entrada);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new ShoppingRepo();
