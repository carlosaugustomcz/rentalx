import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/entities/User";
import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>

    public constructor(){ 
        this.repository = getRepository(User)
    };


    async create({ 
        name, 
        password, 
        email, 
        driver_lincense,
        id,
        avatar 
    }: ICreateUserDTO): Promise<void>{
        
        const user = this.repository.create({
            name,
            password,
            email,
            driver_lincense,
            id,
            avatar
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {

        const User = await this.repository.findOne({email});
        
        return User;
    }

    async findById(id: string): Promise<User> {

        const User = await this.repository.findOne(id)

        return User;
    }

}

export { UsersRepository }