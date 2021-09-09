import { AppError } from "@errors/AppError";
import { UsersRepository } from "@modules/accounts/repositories/implementations/UsersRepository";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string
}


export async function ensureAuthenticadted(request: Request, response: Response, next: NextFunction) {

    const authHeaders = request.headers.authorization;

    if(!authHeaders) {
        throw new AppError("Token missing", 401);
        
    }

    const[, token] = authHeaders.split(' ');

    try {
        const { sub: user_Id } = verify(token, "dc599a9972fde3045dab59dbd1ae170b") as IPayload;

        const usersRepository = new UsersRepository();

        const user = usersRepository.findById(user_Id);

        if(!user) {
            throw new AppError("User does not exists!", 401);
            
        }

        request.user = {
            id: (await user).id,
        }

        next();

    } catch {
        throw new AppError("Invalid token", 401);
        
        
    }
    
}