import express from "express";
import { selectEverything, insertData, deleteData, updateData } from "./src/database/utilsDB.js";
const localHost = 3000;

const server = express();

function app(localHost) {
    server.listen(localHost);
    console.log(`Server is listening at port ${localHost}`);
}

app(localHost);

