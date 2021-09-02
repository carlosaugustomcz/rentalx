import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {

    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
    });

    it("should be able to create a new category", async () => {
       
        const category = {
            name: "Category Test",
            description: "Category Description Test"
        }

        await createCategoryUseCase.execute({
            name: category.name, 
            description: category.description,
        });

        const categoryCreate = await categoriesRepositoryInMemory.findByName(category.name);

         expect(categoryCreate).toHaveProperty("id");
    });

    // Verification Category Exists

    it("should not be able to create new category not name exists", async () => {

        expect(async () => {

            const category = {
                name: "Category Test",
                description: "Category Description Test"
            }
    
            await createCategoryUseCase.execute({
                name: category.name, 
                description: category.description,
            });
    
            await createCategoryUseCase.execute({
                name: category.name, 
                description: category.description,
            });
            
        }).rejects.toBeInstanceOf(AppError);

    })
});
