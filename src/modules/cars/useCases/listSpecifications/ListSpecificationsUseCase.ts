import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";




class ListSpecificationsUseCase{

    constructor (private specificationsRepository: SpecificationsRepository){};

    execute(): Specification[]{

        const specifications = this.specificationsRepository.list();

        return specifications;
        

    }
    
}

export { ListSpecificationsUseCase };