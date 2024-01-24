import * as db from "./database.js";
import pug from "pug";
import Chore from "./../model/chores.js";

// TODO differenciate between a filter function and to select a specific database
// TODO refactor selectData to checkColumns in it
// TODO get everything by id

async function getAllChores(req, res) {
    const chores = await db.selectEverything("chores");
    res.send(chores);
}

async function getChoreByID(req, res) {
    const { id } = req.params;
    const chore = await db.selectByID("chores", "choreID", id);
    res.send(chore);
}

async function postChore(req, res) {
    const body = req.body.chore;
    const chore = new Chore("Testando os afazeres", 34, 22, "teste");
    const values = `"${chore.name}", ${chore.quantity}, ${chore.finished}, "${chore.comments}"`;
    await db.insertData("chores", values);
    res.send("ok");
}

async function putChore(req, res) {
    const { id } = req.params;
    const chore = new Chore("testando a bilola mole", 34, 22, "teste");
    const values = `chore = "${chore.name}", quantity = ${chore.quantity}, finished = ${chore.finished}, comments = "${chore.comments}"`;
    const where = `choreID = ${id}`;
    await db.updateData("chores", values, where);
    res.send("ok");
}

async function deleteChore(req, res) {
    const { id } = req.params;
    const where = `choreID = ${id}`;
    await db.deleteData("chores", where);
    res.send("ok");
}

export { getAllChores, getChoreByID, postChore, putChore, deleteChore }

