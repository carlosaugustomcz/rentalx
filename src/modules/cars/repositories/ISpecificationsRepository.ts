import { Specification } from "../entities/Specification";


// DTO - Data Transfer Object
interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

class ISpecificationsRepository {

    create( { name, description }: ICreateSpecificationDTO ): Promise<void>;

    findByName(name: string): Promise<Specification>;
    
    list(): Promise<Specification[]>;
} 

export { ISpecificationsRepository, ICreateSpecificationDTO }