import { Category } from "../entities/Category";


// DTO - Data Transfer Object
interface ICreateCategoryDTO{
    name: string;
    description: string;
}

class ICategoriesRepository {
    function create( { name, description }: ICreateCategoryDTO ): Promise<void>;

    function findByName(name: string): Promise<Category>;
    
    function list(): Promise<Category[]>;
} 

export { ICategoriesRepository, ICreateCategoryDTO }