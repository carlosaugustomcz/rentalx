import { Specification } from "@modules/cars/entities/Specification";
import { SpecificationsRepository } from "@modules/cars/repositories/implementations/SpecificationsRepository";
import { inject, injectable } from "tsyringe";




@injectable()
class ListSpecificationsUseCase{

    constructor (
        @inject("SpecificationsRepository")
        private specificationsRepository: SpecificationsRepository){};

    async execute(): Promise<Specification[]>{

        const specifications = await this.specificationsRepository.list();

        return specifications;
        

    }
    
}

export { ListSpecificationsUseCase };