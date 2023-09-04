import { Request } from "express";
import { userRepository } from "../repositories";
import { User } from "../entities";
import { ErrorHandler } from "../errors";

class UserService {
  UserCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const user: User = await userRepository.save({
      ...body,
    });

    return user;
  };

  UserListLoader = async (req: Request) => {
    let users: User[] = await userRepository.all();
    users = users.sort((a, b) => (a.id > b.id ? -1 : a.id < b.id ? 1 : 0));
    return {
      status: 200,
      users: users,
    };
  };

  UserLoader = async (req: Request) => {
    const user: User = await userRepository.findOne({
      id: req.params.id,
    });
    return { status: 200, user: user };
  };

  UserEditor = async (req: Request) => {
    const user: User = await userRepository.findOne({
      id: req.params.id,
    });
    const userUpdated = {
      ...user,
    };
    await userRepository.save(userUpdated);
    return {
      status: 200,
      user: user,
    };
  };

  UserDeletor = async (req: Request) => {
    const user: User = await userRepository.findOne({
      id: req.params.id,
    });

    if (!user) {
      throw new ErrorHandler(404, "User not found");
    }

    await userRepository.delete(req.params.id);

    return {
      status: 200,
      message: "User deleted",
    };
  };
}

export default new UserService();
