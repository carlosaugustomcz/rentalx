import{Request, Response} from "express";
import { container } from "tsyringe";
import { CreateCarUseCase } from "./CreateCarUseCase";


class CreateCarController {

    async handle(request: Request, response: Response): Promise<Response> {

        const {brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name
        } = request.body;

        const createCarUseCase = container.resolve(CreateCarUseCase);

        console.log(createCarUseCase)

        const car = await createCarUseCase.execute({
            name, 
            license_plate, 
            fine_amount, 
            description, 
            daily_rate, 
            category_id,
            brand
        });

        return response.status(201).json(car);
    }
}

export { CreateCarController }