import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {

      private specifications: Specification[];

      private static INSTANCE: SpecificationsRepository;


    constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {

        if(!SpecificationsRepository.INSTANCE){
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();

        }
        return SpecificationsRepository.INSTANCE;
    } 


    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);

        return specification;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification()
    
        Object.assign(specification, {
           name,
           description,
           create_at : new Date()
        });
 
        this.specifications.push(specification);
    }

    list(): Specification[] {
        return this.specifications;

    }

}

export { SpecificationsRepository };