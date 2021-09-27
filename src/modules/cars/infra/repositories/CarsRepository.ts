
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

}

export { CarsRepository }