import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationInMemory implements ISpecificationsRepository {

    specifications: Specification[] = [] ;

    async create({ description, name }: ICreateSpecificationDTO): Promise<void>{

        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
        });
        
        this.specifications.push(specification);

    }

    async findByName(name: string): Promise<Specification> {

        return this.specifications.find((specification) => specification.name === name);

    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        
        const allSpecifications = this.specifications.filter((specification) => 
            ids.includes(specification.id));
            
        return allSpecifications;
    }

    async list(): Promise<Specification[]> {

        return this.specifications

    }


}

export {SpecificationInMemory};