import { CarsRepository } from "@modules/cars/infra/repositories/CarsRepository";
import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { ListCarsUseCase } from "./listCarsUseCase";

let carsRepositoryInMemory: CarRepositoryInMemory;
let listCarsUseCase: ListCarsUseCase;

describe("list cars", () => {

    beforeEach(() => {

        carsRepositoryInMemory = new CarRepositoryInMemory()
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    })

    it(" should be able to list all available cars", async () => {

        const car = await carsRepositoryInMemory.create({
            name : "Carro1", 
            license_plate : "ABC-0001", 
            fine_amount : 100, 
            description : "Carro description", 
            daily_rate : 250, 
            category_id : "category_id",
            brand : "brand",
        });

        const cars = await listCarsUseCase.execute();
        
        expect(cars).toEqual([car]);

    });
});