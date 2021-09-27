import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase"



let createCarUseCase : CreateCarUseCase;
let carRepositoryInMemory: CarRepositoryInMemory; 

describe("Create Car", () => {

    beforeEach(() => {
        carRepositoryInMemory = new CarRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);

    });


    it("should be able to create a new car", async () => {
        
        const car = await createCarUseCase.execute({
            name: "Name", 
            description: "Descrption", 
            daily_rate: 60, 
            category_id: "111111", 
            brand: "brand", 
            fine_amount: 100, 
            license_plate: "ABC-1234"
        });
    
        expect(car).toHaveProperty("id");


    });

    it("should not be able to create car already exists", async() =>{
       
       expect(async ()=> {
        await createCarUseCase.execute({
            name: "Car1", 
            description: "Descrption1", 
            daily_rate: 60, 
            category_id: "111111", 
            brand: "brand1", 
            fine_amount: 100, 
            license_plate: "ABC-1234"
        });

        await createCarUseCase.execute({
            name: "Car2", 
            description: "Descrption2", 
            daily_rate: 60, 
            category_id: "111111", 
            brand: "brand2", 
            fine_amount: 100, 
            license_plate: "ABC-1234"
        });

        }).rejects.toBeInstanceOf(AppError);
    })

    it("should be able to create a new car with available true by default", async () => {
        
        const car = await createCarUseCase.execute({
            name: "Name", 
            description: "Descrption", 
            daily_rate: 60, 
            category_id: "111111", 
            brand: "brand", 
            fine_amount: 100, 
            license_plate: "ABC-1234"
        });
    
        expect(car.available).toBe(true);


    });
});