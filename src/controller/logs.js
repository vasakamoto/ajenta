import * as db from "./database.js";
import pug from "pug";
import Log from "./../model/logs.js";

//TODO use post function to send a rendered template to append to the logs list
//TODO or use a swap oob

async function getAllLogs(req, res) {
    const logs = await db.selectEverything("logs");
    const template = pug.compileFile("./src/view/includes/logs-board.pug");
    const markup = template({logs}); 
    console.log("__________________________\n\nLOGS:\n\n");
    console.log(logs);
    console.log("\n\n__________________________");
    res.send(markup);
}

async function getLogByID(req, res) {
    const { id } = req.params;
    if(id != 0) {
        const log = await db.selectByID("logs", "logID", id);
        const template = pug.compileFile("./src/view/includes/logs-put-modal.pug");
        const markup = template({log});
        console.log("LOG:\n\n")
        console.log(log);
        console.log("\n\n__________________________");
        res.send(markup);
    }
    else {
        const template = pug.compileFile("./src/view/includes/logs-post-modal.pug");
        const date = new Date().toString();
        const markup = template({date});
        console.log("LOGS:\n\n");
        console.log("WAITING NEW LOG");
        res.send(markup);
    }
}

async function postLog(req, res) {
    const { body } = req;
    const log = new Log(body.log);
    const values = `"${log.date}", "${log.log}"`;
    await db.insertData("logs", values);
    console.log("\n\n");
    console.log(values);
    console.log("\n\n__________________________");
    res.send("ok");
}

async function putLog(req, res) {
    const { id } = req.params;
    const { log } = req.body;
    const values =  `comments = "${log}"`;
    const where =  `logID = ${id}`;
    await db.updateData("logs", values, where);
    console.log("__________________________\n\nEDITING\n\n");
    console.log(values);
    console.log("\n\n__________________________");
    res.send("ok");
}

async function deleteLog(req, res) {
    const { id } = req.params;
    const where =  `logID = ${id}`;
    const del = await db.deleteData("logs", where);
    res.send("ok");
}

export { getAllLogs, getLogByID, postLog, putLog, deleteLog }
