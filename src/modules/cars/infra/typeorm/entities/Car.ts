import {v4 as uuidV4, v4} from "uuid"


class Car{
    id: string;

    name: string;

    description: string;

    daily_rate: number;

    available: boolean;

    lincense_plate: string;

    fine_amount: number;

    brand: string;

    category_id: string;
    
    create_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.available = true;
            this.create_at = new Date();
        }
    }
}

export { Car }