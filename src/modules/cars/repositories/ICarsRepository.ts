import { Car } from "../infra/typeorm/entities/Car";


interface ICreateCarDTO {
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}


interface ICarsRepository {

    create(data: ICreateCarDTO): Promise<Car>;

    findByLincesePlate(license_plate: string): Promise<Car>;
    findAvailable(): Promise<Car[]>;

}


export { ICarsRepository, ICreateCarDTO }