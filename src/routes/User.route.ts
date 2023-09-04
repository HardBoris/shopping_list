import { Router } from "express";
import { userController } from "../controllers";

const userRouter = Router();

userRouter.post("/users/register", userController.UserCreator);
userRouter.get("/users", userController.UserListLoader);
userRouter.get("/users/:id", userController.UserLoader);

userRouter.patch("/users/:id", userController.UserEditor);

userRouter.delete("/users/:id", userController.UserDeletor);

export default userRouter;
