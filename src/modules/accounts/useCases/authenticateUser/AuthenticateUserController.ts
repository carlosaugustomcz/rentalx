import{ Request, Response } from "express"
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController{

    async handle(request: Request, response: Response): Promise<Response> {

        const { email, password } = request.body;

        const authenticateUserUserCase = container.resolve(AuthenticateUserUseCase);

        const authenticateInfo = await authenticateUserUserCase.execute({ email, password });

        return response.json(authenticateInfo);

    }
}

export { AuthenticateUserController } 