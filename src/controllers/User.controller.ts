import { Request, Response } from "express";
import { userService } from "../services";

class UserController {
  UserCreator = async (req: Request, res: Response) => {
    const user = await userService.UserCreator(req);
    return res.status(201).json(user);
  };
  UserListLoader = async (req: Request, res: Response) => {
    const { status, users } = await userService.UserListLoader(req);
    return res.status(status).json(users);
  };

  UserLoader = async (req: Request, res: Response) => {
    const { status, user } = await userService.UserLoader(req);
    return res.status(status).json(user);
  };

  UserEditor = async (req: Request, res: Response) => {
    const { status, user } = await userService.UserEditor(req);
    return res.status(status).json(user);
  };

  UserDeletor = async (req: Request, res: Response) => {
    const { status, message } = await userService.UserDeletor(req);
    return res.status(status).json(message);
  };
}

export default new UserController();
