import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoryInMemory: CarRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("list cars", () => {

    beforeEach(() => {

        carsRepositoryInMemory = new CarRepositoryInMemory()
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
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

        const cars = await listAvailableCarsUseCase.execute({});
        
        expect(cars).toEqual([car]);

    });

    it("should be able to list all available cars by brand", async () => {

        const car = await carsRepositoryInMemory.create({
            name : "Carro1", 
            license_plate : "ABC-0001", 
            fine_amount : 100, 
            description : "Carro description", 
            daily_rate : 250, 
            category_id : "category_id",
            brand : "Car_brand_test",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car_brand_test"
        });

        expect(cars).toEqual([car]);
        
    })

    it("should be able to list all available cars by name", async () => {

        const car = await carsRepositoryInMemory.create({
            name : "Carro3", 
            license_plate : "ABC-0002", 
            fine_amount : 100, 
            description : "Carro description", 
            daily_rate : 250, 
            category_id : "category_id",
            brand : "Car_brand_test",
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: "Carro3"
        });

        expect(cars).toEqual([car]);
        
    })

    it("should be able to list all available cars by category_id", async () => {

        const car = await carsRepositoryInMemory.create({
            name : "Carro4", 
            license_plate : "ABC-0003", 
            fine_amount : 100, 
            description : "Carro description", 
            daily_rate : 250, 
            category_id : "category_id",
            brand : "Car_brand_test",
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "category_id"
        });

        expect(cars).toEqual([car]);
        
    })
});