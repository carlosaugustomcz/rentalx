import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ){}

    async execute({ name, description }: IRequest) : Promise<void> {

        const categoryAllrigthExist = await this.categoriesRepository.findByName(name);

        if(categoryAllrigthExist) {
            throw new Error("Category already exists!");
        }
    
        this.categoriesRepository.create({ name, description })
    
        
    }

}


export { CreateCategoryUseCase};