import express from "express";
import { selectEverything, checkColumns, insertData, deleteData, updateData } from "./src/database/utilsDB.js";
const localHost = 3000;

const server = express();

function app(localHost) {
    server.listen(localHost);
    console.log(`Server is listening at port ${localHost}`);
}

app(localHost);

//const insert = await insertData("logs", `"alguma data genérica", "comenta alguma coisa"`);

const everything = await selectEverything("logs");
console.log(everything);

const update = await deleteData("logs", `date = "lixo"`);

const lixo = await selectEverything("logs");
console.log(lixo);
