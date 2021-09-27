import {v4 as uuidV4} from "uuid";
import { hash } from "bcryptjs";

import createConnection from "../index"



async function create() {
    const connection = await createConnection("localhost");
    
    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(
        `INSERT INTO USERS(id, name, email, password, "isAdmin", driver_license )
        VALUES('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'xxxxxxx')`
    );

    await connection.close;
    
}

create().then(() => console.log('Admin Created!'));