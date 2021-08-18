import {v4 as uuidv4, v4} from "uuid";

import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("User")
class User {

    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    driver_lincese: string;

    @Column()
    isAdmin: boolean;

    @CreateDateColumn()
    create_At: Date;

    constructor() {
        if (!this.id){
            this.id = uuidv4();
        }
    }

}

export { User }