import { SpecificationsRepository } from "@modules/cars/infra/repositories/SpecificationsRepository";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

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