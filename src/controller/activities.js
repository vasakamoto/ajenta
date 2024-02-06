import * as db from "./database.js";
import pug from "pug";
import { v4 as uuid } from "uuid";
import { Activity } from "./../model/projects.js";

// TODO get all activities from a project and associate with it instead of all activites
// use the db.filter function to achieve this

async function getAllActivities(req, res) {
    const projectID = `"${req.params.projectid}"`;
    const where = ` projectID = ${projectID}`;
    const activities = await db.selectWhere("activities", where);
    console.log(activities);
    const template = pug.compileFile("./src/view/templates/list-activities.pug");
    const markup = template({activities});
    res.send(markup);
}

async function getActivityByID(req, res) {
    const activityID = `"${req.params.activityid}"`;
    const projectID = req.params.projectid;
    if(activityID == `"new"`) {
        const template = pug.compileFile("./src/view/templates/modal-activity-post.pug");
        const markup = template({projectID});
        res.send(markup);
    }
    else {
        const activity = await db.selectByID("activities", "activityID", activityID);
        const template = pug.compileFile("./src/view/templates/modal-activity-put.pug");
        const markup = template({activity});
        res.send(markup);
    }
}

async function postActivity(req, res) {
    let { activity, deadline, comments } = req.body;
    const projectID = req.params.projectid;
    const activityID = "a" + uuid();
    activity = new Activity(activityID, activity, projectID, 0, deadline, comments);
    const values = `"${activity.activityID}", "${activity.activity}", "${activity.projectID}", ${activity.finished}, "${activity.deadline}", "${activity.comments}"`;
    await db.insertData("activities", values);
    const template = pug.compileFile("./src/view/templates/element-activity.pug");
    const markup = template({activity});
    res.send(markup);
}

async function putActivity(req, res) {
    const id = `"${req.params.activityid}"`;
    let { activity, deadline, comments } = req.body;
    const originalActivity = await db.selectByID("activities", "activityID", id);
    const values =  `activity = "${activity}", projectID = "${originalActivity.projectID}", finished = ${originalActivity.finished}, deadline = "${deadline}", comments = "${comments}"`;
    const where =  `activityID = ${id}`;
    await db.updateData("activities", values, where);
    activity = await db.selectByID("activities", "activityID", id);
    const template = pug.compileFile("./src/view/templates/element-activity.pug");
    const markup = template({activity});
    res.send(markup);
}

async function deleteActivity(req, res) {
    const id = `"${req.params.activityid}"`;
    const where =  `activityID = ${id}`;
    await db.deleteData("activities", where);
    res.send("ok");
}

export { getAllActivities, getActivityByID, postActivity, putActivity, deleteActivity }


