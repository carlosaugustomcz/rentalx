import { UsersRepository } from "@modules/accounts/infra/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";
import { Request, Response, NextFunction } from "express";



export async function ensureAdmin(request: Request, response: Response, next: NextFunction){

    const { id } = request.user;

    const userRepository = new UsersRepository();
    const user = await userRepository.findById(id);

    if(!user.isAdmin){
        throw new AppError("User isn´t admin");
        
    }

    return next();
}