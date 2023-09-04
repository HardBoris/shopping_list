import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

interface IUserRepo {
  save: (user: Partial<User>) => Promise<User>;
  all: () => Promise<User[]>;
  findOne: (payload: object) => Promise<User>;
  delete: (id: string) => Promise<DeleteResult>;
}

class UserRepo implements IUserRepo {
  private ormRepo: Repository<User>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(User);
  }

  save = async (user: Partial<User>) => await this.ormRepo.save(user);
  all = async () => await this.ormRepo.find({ relations: { prequests: true } });
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new UserRepo();
