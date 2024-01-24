import * as db from "./database.js";
import pug from "pug";
import { Activity } from "./../model/projects.js";

// TODO differenciate between a filter function and to select a specific database
// TODO refactor selectData to checkColumns in it
// TODO get everything by id

async function getAllActivities(req, res) {
    const activities = await db.selectEverything("activities");
    res.send(activities);
}

async function getActivityByID(req, res) {
    const { id } = req.params;
    const activity = await db.selectByID("activities", "activityID", id);
    res.send(activity);
}

async function postActivity(req, res) {
    const body = req.body.activity;
    const activity = new Activity("testando atividades", 2, 1, "alguma data", "teste");
    const values = `"${activity.name}", ${activity.projectID}, ${activity.finished}, "${activity.deadline}", "${activity.comments}"`;
    await db.insertData("activities", values);
    res.send("ok");
}

async function putActivity(req, res) {
    const { id } = req.params;
    const activity = new Activity("Minha rola minha vida", 2, 0, "alguma data", "teste");
    const values = `activity = "${activity.name}", project = ${activity.projectID}, finished = ${activity.finished}, deadline = "${activity.deadline}", comments = "${activity.comments}"`;
    const where = `activityID = ${id}`;
    await db.updateData("activities", values, where);
    res.send("ok");
}

async function deleteActivity(req, res) {
    const { id } = req.params;
    const where = `activityID = ${id}`;
    await db.deleteData("activities", where);
    res.send("ok");
}

export { getAllActivities, getActivityByID, postActivity, putActivity, deleteActivity }


