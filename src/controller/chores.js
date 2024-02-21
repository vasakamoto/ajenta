import * as db from "./database.js";
import pug from "pug";
import { v4 as uuid } from "uuid";
import Chore from "./../model/chores.js";

async function getAllChores(req, res) {
    const chores = await db.selectEverything("chores");
    const template = pug.compileFile("./src/view/templates/list-chores.pug");
    const markup = template({chores});
    res.send(markup);
}

async function getChoreByID(req, res) {
    const id = `"${req.params.id}"`;
    if(id == `"new"`) {
        const template = pug.compileFile("./src/view/templates/modal-chore-post.pug");
        const markup = template({});
        res.send(markup);
    }
    else {
        const chore = await db.selectByID("chores", "choreID", id);
        const template = pug.compileFile("./src/view/templates/modal-chore-put.pug");
        const markup = template({chore});
        res.send(markup);
    }
}

async function postChore(req, res) {
    let { chore, quantity, frequency, comments } = req.body;
    const id = "c" + uuid();
    chore = new Chore(id, chore, frequency, quantity, 0, comments);
    const values = `"${chore.choreID}", "${chore.chore}", "${chore.frequency}", ${chore.quantity}, ${chore.finished}, "${chore.comments}"`;
    await db.insertData("chores", values);
    const template = pug.compileFile("./src/view/templates/element-chore.pug");
    const markup = template({chore});
    res.send(markup);
}

async function putChore(req, res) {
    const id = `"${req.params.id}"`;
    let { chore, quantity, frequency, finished, comments } = req.body;
    const values =  `chore = "${chore}", frequency = "${frequency}", quantity = "${quantity}", finished = "${finished}", comments = "${comments}"`;
    const where =  `choreID = ${id}`;
    await db.updateData("chores", values, where);
    chore = await db.selectByID("chores", "choreID", id);
    const template = pug.compileFile("./src/view/templates/element-chore.pug");
    const markup = template({chore});
    res.send(markup);
}

//Use pendencies to check if the chore is late or open
async function finishedChore(req, res) {
    const id = `"${req.params.id}"`;
     
}

async function deleteChore(req, res) {
    const id = `"${req.params.id}"`;
    const where =  `choreID = ${id}`;
    await db.deleteData("chores", where);
    res.send("ok");
}

export { getAllChores, getChoreByID, postChore, putChore, finishedChore, deleteChore }
