import * as db from "./database.js";
import pug from "pug";
import { v4 as uuid } from "uuid";
import Log from "./../model/logs.js";
 

//TODO use post function to send a rendered template to append to the logs list
//TODO or use a swap oob

async function getAllLogs(req, res) {
    const logs = await db.selectEverything("logs");
    const template = pug.compileFile("./src/view/list-logs.pug");
    const markup = template({logs}); 
    console.log("__________________________\n\nLOGS:\n\n");
    console.log(logs);
    console.log("\n\n__________________________");
    res.send(markup);
}

async function getLogByID(req, res) {
    const id = `"${req.params.id}"`;
    if(id == `"new"`) {
        const template = pug.compileFile("./src/view/modal-log-post.pug");
        const date = new Date();
        const day = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        const markup = template({day});
        console.log("LOGS:\n\n");
        console.log("WAITING NEW LOG");
        res.send(markup);
    }
    else {
        const log = await db.selectByID("logs", "logID", id);
        const template = pug.compileFile("./src/view/modal-log-put.pug");
        const markup = template({log});
        console.log("LOG:\n\n")
        console.log(log);
        console.log("\n\n__________________________");
        res.send(markup);
    }
}

async function postLog(req, res) {
    let { log } = req.body;
    const id = "l" + uuid();
    log = new Log(id, log);
    const values = `"${log.logID}", "${log.date}", "${log.log}"`;
    await db.insertData("logs", values);
    const template = pug.compileFile("./src/view/element-log.pug");
    const markup = template({log});
    console.log("\n\n");
    console.log(values);
    console.log("\n\n__________________________");
    res.send(markup);
}

async function putLog(req, res) {
    const id = `"${req.params.id}"`;
    let { log } = req.body;
    const values =  `log = "${log}"`;
    const where =  `logID = ${id}`;
    await db.updateData("logs", values, where);
    log = await db.selectByID("logs", "logID", id);
    const template = pug.compileFile("./src/view/element-log.pug");
    const markup = template({log});
    console.log("__________________________\n\nEDITING\n\n");
    console.log(values);
    console.log("\n\n__________________________");
    res.send(markup);
}

async function deleteLog(req, res) {
    const id = `"${req.params.id}"`;
    const where =  `logID = ${id}`;
    const del = await db.deleteData("logs", where);
    res.send("ok");
}

export { getAllLogs, getLogByID, postLog, putLog, deleteLog }
