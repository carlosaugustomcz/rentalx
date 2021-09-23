import { Specification } from "../infra/typeorm/entities/Specification";


// DTO - Data Transfer Object
interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificationsRepository {

    create( { name, description }: ICreateSpecificationDTO ): Promise<void>;

    findByName(name: string): Promise<Specification>;
    
    list(): Promise<Specification[]>;
} 

export { ISpecificationsRepository, ICreateSpecificationDTO }