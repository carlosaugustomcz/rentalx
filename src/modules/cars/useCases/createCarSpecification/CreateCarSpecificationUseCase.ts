import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository"
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";



interface IRequest{
    car_id: string;
    specification_id: string;
}


class CreateCarSpecificationUseCase {

    constructor(
        private carRepository: ICarsRepository,
        private specificationRepository: ISpecificationsRepository){}

    async execute({car_id, specification_id}: IRequest): Promise<void> {
        
        const carExists = this.carRepository.findById(car_id);

        if(!carExists){
            throw new AppError("Car is not Exists!");
            
        }

    } 


}

export { CreateCarSpecificationUseCase }