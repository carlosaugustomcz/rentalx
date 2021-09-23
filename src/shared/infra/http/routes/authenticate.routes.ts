
import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { Router } from "express";


const authenticateRouter = Router();

const authenticateUserController = new AuthenticateUserController();


authenticateRouter.post("/sessions", authenticateUserController.handle);

export { authenticateRouter }