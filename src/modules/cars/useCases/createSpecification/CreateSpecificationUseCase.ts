import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    
    constructor(private specificationsRepository: ISpecificationsRepository){

    }
    
        execute({ name, description }: IRequest) : void {
    
            const specificationAllrigthExist = this.specificationsRepository.findByName(name);

            if(specificationAllrigthExist) {
                throw new Error("Specification already exists!");
            }
        
            this.specificationsRepository.create({ name, description })
        
            
        }
    
}




export { CreateSpecificationUseCase };