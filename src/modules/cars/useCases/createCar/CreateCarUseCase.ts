import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


interface IRequest{
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;

}

@injectable()
class CreateCarUseCase {

    constructor(
        @inject("CarsRepository")
        private carRepository: ICarsRepository
    ){}

  async execute({name, description, daily_rate, license_plate, fine_amount, brand, category_id}: IRequest): Promise<Car> {

    const carAlreadyExists = this.carRepository.findByLincesePlate(license_plate);

    if(!carAlreadyExists){
    
        throw new AppError("Car already exists!");
    
    }

    const car = await this.carRepository.create({
        name,
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        license_plate

    })

    return car;
  }

}

export { CreateCarUseCase }