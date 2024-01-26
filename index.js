import express from "express";
import { initDB } from "./src/controller/database.js";
import { router } from "./src/controller/routes.js";
import * as pendencies from "./src/controller/pendencies.js";

console.log("\n\n\nInitializing Server...\n\n\n");
await initDB();

const localHost = 8000;

const server = express();

function app(localHost) {
    server.listen(localHost);
    console.log(`Server is listening at port ${localHost}`);
}

server.set("views", "./src/view");
server.set("view engine", "pug");

server.use(express.urlencoded({extended:true}))
server.use(router);
server.use(express.static("./"));

server.get("/", (req, res) => {
    res.render("index.pug" )
});

console.log("==================================================");

app(localHost);

export { server }
