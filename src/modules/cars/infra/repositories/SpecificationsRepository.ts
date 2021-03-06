import { ICreateSpecificationDTO, ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { getRepository, Repository } from "typeorm";
import { Specification } from "../typeorm/entities/Specification";


class SpecificationsRepository implements ISpecificationsRepository {

    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }
    
    findByIds(ids: string[]): Promise<Specification[]> {
        throw new Error("Method not implemented.");
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({name})

        return specification;
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description
        }); 
    
        await this.repository.save(specification);
    }

    async list(): Promise<Specification[]> {

        const specifications = await this.repository.find()

        return specifications;

    }

}

export { SpecificationsRepository };