import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Detail } from "../entities";

interface IDetailRepo {
  save: (detail: Partial<Detail>) => Promise<Detail>;
  all: () => Promise<Detail[]>;
  findOne: (payload: object) => Promise<Detail>;
  delete: (id: string) => Promise<DeleteResult>;
}

class DetailRepo implements IDetailRepo {
  private ormRepo: Repository<Detail>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Detail);
  }

  save = async (detail: Partial<Detail>) => await this.ormRepo.save(detail);
  all = async () =>
    await this.ormRepo.find({ relations: { prequest: true, element: true } });
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new DetailRepo();
