import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

class ListAvailableCarsController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { brand, category_id, name} = request.query;

     

        const listAvailableCarsUseCase = container.resolve(ListAvailableCarsUseCase);

        const cars = listAvailableCarsUseCase.execute({
            category_id: category_id as string,
            brand: brand as string,
            name: name as string,
        });


        return response.json(cars);
    }

}

export { ListAvailableCarsController }