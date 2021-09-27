import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepositoryInMemory implements IUsersRepository {

    users : User[] = [];

    async create({ driver_license, name, password, email }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            driver_license, 
            name, 
            password, 
            email
        })

        this.users.push(user); 
        
    }

    async findByEmail(email: string): Promise<User> {
       const user = this.users.find((user) => user.email === email);
       
       return user;

    }

    async findById(id: string): Promise<User> {
        const user = this.users.find((user) => user.id === id);
       
       return user;
    }


} 

export { UsersRepositoryInMemory }