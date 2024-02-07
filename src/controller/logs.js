import * as db from "./database.js";
import pug from "pug";
import { v4 as uuid } from "uuid";
import Log from "./../model/logs.js";
import { epochToDate } from "./utils.js";
 
async function getAllLogs(req, res) {
    const logs = await db.selectEverything("logs");
    console.log(logs)
    for(let x of logs) {
        x.date = epochToDate(x.date);
    }
    console.log(logs)
    const template = pug.compileFile("./src/view/templates/list-logs.pug");
    const markup = template({logs}); 
    res.send(markup);
}

async function getLogByID(req, res) {
    const id = `"${req.params.id}"`;
    if(id == `"new"`) {
        const template = pug.compileFile("./src/view/templates/modal-log-post.pug");
        const date = new Date().valueOf();
        const day = epochToDate(date);
        const markup = template({day});
        res.send(markup);
    }
    else {
        const log = await db.selectByID("logs", "logID", id);
        log.date = epochToDate(log.date);
        const template = pug.compileFile("./src/view/templates/modal-log-put.pug");
        const markup = template({log});
        res.send(markup);
    }
}

async function postLog(req, res) {
    let { log } = req.body;
    const id = "l" + uuid();
    log = new Log(id, log);
    const values = `"${log.logID}", "${log.date}", "${log.log}"`;
    await db.insertData("logs", values);
    log.date = epochToDate(log.date);
    const template = pug.compileFile("./src/view/templates/element-log.pug");
    const markup = template({log});
    res.send(markup);
}

async function putLog(req, res) {
    const id = `"${req.params.id}"`;
    let { log } = req.body;
    const values =  `log = "${log}"`;
    const where =  `logID = ${id}`;
    await db.updateData("logs", values, where);
    log = await db.selectByID("logs", "logID", id);
    log.date = epochToDate(log.date);
    const template = pug.compileFile("./src/view/templates/element-log.pug");
    const markup = template({log});
    res.send(markup);
}

async function deleteLog(req, res) {
    const id = `"${req.params.id}"`;
    const where =  `logID = ${id}`;
    const del = await db.deleteData("logs", where);
    res.send("ok");
}

export { getAllLogs, getLogByID, postLog, putLog, deleteLog }
