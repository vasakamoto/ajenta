import * as db from "./database.js";
import pug from "pug";
import { v4 as uuid } from "uuid";
import { Project } from "./../model/projects.js";
import { epochToDate } from "./utils.js";

// TODO at projects form, add functionality to add new activities in the form

async function getAllProjects(req, res) {
    const projects = await db.selectEverything("projects");
    console.log(projects)
    const template = pug.compileFile("./src/view/templates/list-projects.pug");
    const markup = template({projects});
    res.send(markup);
}

async function getProjectByID(req, res) {
    const id = `"${req.params.id}"`;
    if(id == `"new"`) {
        const template = pug.compileFile("./src/view/templates/modal-project-post.pug");
        const markup = template({});
        res.send(markup);
    }
    else {
        const project = await db.selectByID("projects", "projectID", id);
        const template = pug.compileFile("./src/view/templates/modal-project-put.pug");
        const markup = template({project});
        res.send(markup);
    }
}

async function postProject(req, res) {
    let { project, activities, finished, deadline, comments } = req.body;
    const id = "p" + uuid();
    deadline = new Date(deadline).valueOf();
    project = new Project(id, project, 0, 0, 0, 0, deadline, epochToDate(deadline), comments);
    const values = `"${project.projectID}", "${project.project}", ${project.activities}, ${project.finished}, ${project.finishedAtEpoch}, ${project.finishedAtDate}, ${project.deadlineEpoch}, "${project.deadlineDate}","${project.comments}"`;
    await db.insertData("projects", values);
    const template = pug.compileFile("./src/view/templates/element-project.pug");
    const markup = template({project});
    res.send(markup);
}

async function putProject(req, res) {
    const id = `"${req.params.id}"`;
    let { project, activities, finished, deadline, comments } = req.body;
    deadline = new Date(deadline).valueOf();
    const values =  `project = "${project}", activities = ${activities}, finished = ${finished}, deadline = "${deadline}", comments = "${comments}"`;
    const where =  `projectID = ${id}`;
    await db.updateData("projects", values, where);
    project = await db.selectByID("projects", "projectID", id);
    const template = pug.compileFile("./src/view/templates/element-project.pug");
    const markup = template({project});
    res.send(markup);
}

async function deleteProject(req, res) {
    const id = `"${req.params.id}"`;
    const whereProject = `projectID = ${id}`;
    const whereActivity = `projectID = ${id}`;
    await db.deleteData("activities", whereActivity);
    await db.deleteData("projects", whereProject);
    res.send("ok");
}

export { getAllProjects, getProjectByID, postProject, putProject, deleteProject }

