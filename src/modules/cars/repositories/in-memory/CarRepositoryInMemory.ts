import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";




class CarRepositoryInMemory implements ICarsRepository{
    cars: Car[] = [];
   
    async create({ brand, category_id, daily_rate, description, fine_amount, lincense_plate, name }: ICreateCarDTO): Promise<Car> {
        
        const car = new Car();

        Object.assign(car, {
            name,
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            lincense_plate
        });
        
        this.cars.push(car);

        return car;
        
    };

    async findByLincesePlate(lincense_plate: string): Promise<Car> {
        
        return this.cars.find((car) => car.lincense_plate === lincense_plate);
    }
    

}

export { CarRepositoryInMemory }
    