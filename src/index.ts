import express from 'express';
import createConnection from './config/database';

const app = express();

createConnection
    .then(connection => {
        console.log("ok", connection)
    }).catch(error => console.log(error));

app.use(express.json())

export default app;