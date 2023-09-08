import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Midia } from "../entities";

interface IMidiaRepo {
  save: (midia: Partial<Midia>) => Promise<Midia>;
  all: () => Promise<Midia[]>;
  findOne: (payload: object) => Promise<Midia>;
  delete: (id: string) => Promise<DeleteResult>;
}

class MidiaRepo implements IMidiaRepo {
  private ormRepo: Repository<Midia>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Midia);
  }

  save = async (midia: Partial<Midia>) => await this.ormRepo.save(midia);
  all = async () => await this.ormRepo.find({ relations: { element: true } });
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new MidiaRepo();
