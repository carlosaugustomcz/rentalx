import { Request, Response} from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";



class UpdateUserAvatarController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.user;

        const avatar_file = request.file.filename;

        const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

        await updateUserAvatarUseCase.execute({ user_Id: id, avatar_file } )

        return response.status(201).json({message: "updated"});
    }

}

export { UpdateUserAvatarController }