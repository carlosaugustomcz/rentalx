import { container, inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    
    constructor(
        @inject(SpecificationsRepository)
        private specificationsRepository: ISpecificationsRepository){}
    
         async execute({ name, description }: IRequest) : Promise<void> {
    
            const specificationAllrigthExist =  await this.specificationsRepository.findByName(name);

            if(specificationAllrigthExist) {
                throw new AppError("Specification already exists!");
            }
        
            this.specificationsRepository.create({ name, description })
        
            
        }
    
}

export { CreateSpecificationUseCase };