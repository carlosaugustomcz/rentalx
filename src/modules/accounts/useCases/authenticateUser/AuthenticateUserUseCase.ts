import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest{
    email: string;
    password: string;
}

interface IResponse{
    user: { name: string,
           email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}

    async execute({ email, password }: IRequest): Promise<IResponse> {

        const user = this.userRepository.findByEmail(email)

        if(!user){
            throw new AppError("email or password incorrect!");
             
        }

        const passwordMatch = await compare(password, (await user).password);

        if (!passwordMatch){
            throw new AppError("email or password incorrect!");
            
        }

        const token = sign({}, "dc599a9972fde3045dab59dbd1ae170b",{
            subject: (await user).id,
            expiresIn: "1d"
        });

        const tokenResponse: IResponse = {
            user: {
                name: (await user).name,
                email: (await user).email
            },
            token

        } 

        return tokenResponse;



    }
}

export { AuthenticateUserUseCase }