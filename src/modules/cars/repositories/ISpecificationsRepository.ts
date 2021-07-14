import { Specification } from "../model/Specification";


// DTO - Data Transfer Object
interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

class ISpecificationsRepository {

    create( { name, description }: ICreateSpecificationDTO ): void;
    findByName(name: string): Specification;
    list(): Specification[];
} 

export { ISpecificationsRepository, ICreateSpecificationDTO }