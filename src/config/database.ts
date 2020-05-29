import "reflect-metadata";
import {createConnection} from "typeorm";

export default createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "<username>",
    password: "<password>",
    database: "<database_name>",
    entities: [
        __dirname + '/../**/entity/*.{js,ts}'
    ],
    synchronize: true,
    logging: false
});  