import { ICreateUserDTO } from "../../accounts/dtos/ICreateUserDTO";
import { User } from "../entities/User";



class IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    
}

export { IUsersRepository }