import { Category } from "../model/Category";


// DTO - Data Transfer Object
interface ICreateCategoryDTO{
    name: string;
    description: string;
}

class ICategoriesRepository {
    create( { name, description }: ICreateCategoryDTO ): void;
    findByName(name: string): Category;
    list(): Category[];
} 

export { ICategoriesRepository, ICreateCategoryDTO }