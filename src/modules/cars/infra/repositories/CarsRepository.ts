
import { ICarsRepository, ICreateCarDTO } from "@modules/cars/repositories/ICarsRepository";
import { getRepository, Repository } from "typeorm";
import { Car } from "../typeorm/entities/Car";


class CarsRepository implements ICarsRepository {

    private repository: Repository<Car>;
    
    private constructor() {
        this.repository = getRepository(Car);
    }

    async create({
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        license_plate,
        name }: ICreateCarDTO): Promise<Car> {

        const car = this.repository.create({
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name
        });

        await this.repository.save(car);

        return car;
    }

    async findByLincesePlate(license_plate: string): Promise<Car> {

        const car = await this.repository.findOne({ license_plate });

        return car;
    }

    async findAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]> {
        
        const carsQuery = this.repository
        .createQueryBuilder("c")
        .where("available = :available", { available: true });

        if (brand) {
            carsQuery.andWhere("c.brand = :brand", { brand });
        }

        if (category_id) {
            carsQuery.andWhere("c.category_id = :category_id", { category_id });
        }

        if (name) {
            carsQuery.andWhere("c.name = :name", { name });
        }

        const cars = await carsQuery.getMany();

        console.log(cars);
       
        return cars;


    }

    findById(id: string): Promise<Car> {
        throw new Error("Method not implemented.");
    }

}

export { CarsRepository }