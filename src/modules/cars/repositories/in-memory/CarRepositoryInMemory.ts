import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository, ICreateCarDTO } from "../ICarsRepository";




class CarRepositoryInMemory implements ICarsRepository{
   
    cars: Car[] = [];
   
    async create({ brand, category_id, daily_rate, description, fine_amount, license_plate, name }: ICreateCarDTO): Promise<Car> {
        
        const car = new Car();

        Object.assign(car, {
            name,
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate
        });
        
        this.cars.push(car);

        return car;
        
    };

    async findByLincesePlate(license_plate: string): Promise<Car> {
        
        return this.cars.find((car) => car.license_plate === license_plate);
    }

    async findAvailable(): Promise<Car[]> {
        
        const cars = this.cars.filter((car) => car.available === true);

        return cars;
    }
    

}

export { CarRepositoryInMemory }
    