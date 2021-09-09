import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";

import { ensureAuthenticadted } from "../middlewares/ensureAuthenticated";


const userRoutes = Router();

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

userRoutes.post("/", createUserController.handle);

userRoutes.patch("/avatar",  
    ensureAuthenticadted,
    uploadAvatar.single("avatar"), 
    updateUserAvatarController.handle
);


export { userRoutes }