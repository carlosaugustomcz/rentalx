import { inject, injectable } from "tsyringe";

import { hash } from "bcryptjs";
import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({name, password, email, driver_lincense}: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if(userAlreadyExists) {
          throw new AppError("User already exists!");
            
        }
    
        const passwordHash = await hash(password, 8); 


        await this.usersRepository.create({
                name,
                password: passwordHash,
                email,
                driver_lincense
            });

    }



}

export { CreateUserUseCase }