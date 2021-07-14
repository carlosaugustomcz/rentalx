import {v4 as uuidv4, v4} from "uuid";

class Category {
 id?: string; // ? diz que o campo é opcional
 name: string;
 description: string;
 create_at: Date;    

 constructor() {
    if (!this.id){
        this.id = uuidv4();
    }
 }
}

export { Category }