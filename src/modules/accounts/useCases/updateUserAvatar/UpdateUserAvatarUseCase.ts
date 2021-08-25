import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest{
    user_Id: string,
    avatar_file: string
}

@injectable()
class UpdateUserAvatarUseCase {

    constructor(
    @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({ user_Id, avatar_file }: IRequest): Promise<void> {

        const user = await this.usersRepository.findById(user_Id);

        user.avatar = avatar_file;

        this.usersRepository.create(user);


    }

}


export { UpdateUserAvatarUseCase }