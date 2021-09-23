import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


interface IRequest{
    name: string;
    description: string;
    daily_rate: number;
    lincense_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;

}

//@injectable()
class CreateCarUseCase {

    constructor(
        //@inject("CarRepository")
        private carRepository: ICarsRepository
    ){}

  async execute({name, description, daily_rate, lincense_plate, fine_amount, brand, category_id}: IRequest): Promise<Car> {

    const carAlreadyExists = this.carRepository.findByLincesePlate(lincense_plate);

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
        lincense_plate

    })

    return car;
  }

}

export { CreateCarUseCase }