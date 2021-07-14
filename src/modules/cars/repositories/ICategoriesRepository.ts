import { Category } from "../model/Category";


// DTO - Data Transfer Object
interface ICreateCategoryDTO{
    name: string;
    description: string;
}

class ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create( { name, description }: ICreateCategoryDTO ): void;
} 

export { ICategoriesRepository, ICreateCategoryDTO }