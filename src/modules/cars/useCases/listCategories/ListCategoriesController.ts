import { container } from "tsyringe";
import { Request, Response } from "express";

import { ListCategoriesUseCase} from "./ListCategoriesUseCase"

class ListCategoriesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listCategoiesUseCase = container.resolve(ListCategoriesUseCase); 

        const all =  await listCategoiesUseCase.execute()

        return response.status(200).json(all);

    }
}

export { ListCategoriesController };