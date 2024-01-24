import * as db from "./database.js";
import pug from "pug";
import { Project } from "./../model/projects.js";

// TODO differenciate between a filter function and to select a specific database
// TODO refactor selectData to checkColumns in it
// TODO get everything by id
// TODO check, when executing getAllProjects, for finished activities (query where)

async function getAllProjects(req, res) {
    const projects = await db.selectEverything("projects");
    res.send(projects);
}

async function getProjectByID(req, res) {
    const { id } = req.params;
    const projects = await db.selectByID("projects", "projectID", id);
    res.send(projects);
}

async function postProject(req, res) {
    const body = req.body.project;
    const project = new Project("testando projetos", 34, 22, "alguma data", "teste");
    const values = `"${project.name}", ${project.activities}, ${project.finished}, "${project.deadline}", "${project.comments}"`;
    await db.insertData("projects", values);
    res.send("ok");
}

async function putProject(req, res) {
    const { id } = req.params;
    const project = new Project("Minha casa minha vida", 34, 22, "alguma data", "teste");
    const values = `project = "${project.name}", activities = ${project.activities}, finished = ${project.finished}, deadline = "${project.deadline}", comments = "${project.comments}"`;
    const where = `projectID = ${id}`;
    await db.updateData("projects", values, where);
    res.send("ok");
}

async function deleteProject(req, res) {
    const { id } = req.params;
    const where = `projectID = ${id}`;
    await db.deleteData("projects", where);
    res.send("ok");
}

export { getAllProjects, getProjectByID, postProject, putProject, deleteProject }

