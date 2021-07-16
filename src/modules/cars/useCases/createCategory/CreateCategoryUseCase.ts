import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest{
    name: string;
    description: string;
}
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){}

    execute({ name, description }: IRequest) : void {

        const categoryAllrigthExist = this.categoriesRepository.findByName(name);

        if(categoryAllrigthExist) {
            throw new Error("Category already exists!");
        }
    
        this.categoriesRepository.create({ name, description })
    
        
    }

}


export { CreateCategoryUseCase};