import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Partner } from "../entities";

interface IPartnerRepo {
  save: (partner: Partial<Partner>) => Promise<Partner>;
  all: () => Promise<Partner[]>;
  findOne: (payload: object) => Promise<Partner>;
  delete: (id: string) => Promise<DeleteResult>;
}

class PartnerRepo implements IPartnerRepo {
  private ormRepo: Repository<Partner>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Partner);
  }

  save = async (partner: Partial<Partner>) => await this.ormRepo.save(partner);
  all = async () => await this.ormRepo.find({ relations: { element: true } });
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new PartnerRepo();
