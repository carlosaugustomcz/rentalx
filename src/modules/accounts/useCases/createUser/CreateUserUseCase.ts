import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

import { hash } from "bcryptjs";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

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