import {v4 as uuidv4, v4} from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("specifications")
class Specification {
 @PrimaryColumn()   
 id?: string; // ? diz que o campo é opcional

 @Column()
 name: string;

 @Column()
 description: string;

 @CreateDateColumn()
 create_at: Date;    

 constructor() {
    if (!this.id){
        this.id = uuidv4();
    }
 }
}

export { Specification }