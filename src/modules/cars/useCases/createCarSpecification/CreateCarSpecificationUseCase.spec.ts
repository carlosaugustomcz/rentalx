import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"


let createCarSpeficicationUseCase : CreateCarSpecificationUseCase;
let carRepositoryInMemory: CarRepositoryInMemory; 

describe("create Car Specification", () => {

    beforeEach(() => {

        carRepositoryInMemory = new CarRepositoryInMemory;
        createCarSpeficicationUseCase = new CreateCarSpecificationUseCase(carRepositoryInMemory); 
    })

    it("should be able to add a new specification to now-exists the car", async() => {
        expect(async () => {

            const car_id = '1234';
            const specifications_id = '1234';
    
            await createCarSpeficicationUseCase.execute({ car_id, specifications_id });

        }).rejects.toBeInstanceOf(AppError);

    })

    it("should be able to add a new specification to the car", async() => {
        const car = await carRepositoryInMemory.create({
            name: "Name", 
            description: "Descrption", 
            daily_rate: 60, 
            category_id: "111111", 
            brand: "brand", 
            fine_amount: 100, 
            license_plate: "ABC-1234"
        });

        const specifications_id = '1234';

        await createCarSpeficicationUseCase.execute({
            car_id: car.id,
            specifications_id,

        });
    })


})