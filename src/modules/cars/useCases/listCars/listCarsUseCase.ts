import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";


class ListCarsUseCase{
    constructor(private carRepository: ICarsRepository ){}

    async execute(): Promise<Car[]> {
        
        const cars = this.carRepository.findAvailable();
        
        return cars;

        
    }
}

export { ListCarsUseCase}