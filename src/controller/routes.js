import express from "express";
import * as chores from "./chores.js";
import * as logs from "./logs.js";
import * as projects from "./projects.js";
import * as activities from "./activities.js";

const router = express.Router();

router.get("/pendencies", );

router.get("/deadlines", );

router.get("/monthly-commitments", )

router.get("/chores", chores.getAllChores);
router.get("/chores/:id", chores.getChoreByID);
router.post("/chores", chores.postChore);
router.put("/chores/:id", chores.putChore);
router.delete("/chores/:id", chores.deleteChore);

router.get("/projects", projects.getAllProjects);
router.get("/projects/:id", projects.getProjectByID);
router.post("/projects", projects.postProject);
router.put("/projects/:id", projects.putProject);
router.delete("/projects/:id", projects.deleteProject);

router.get("/activities", activities.getAllActivities);
router.get("/activities/:id", activities.getActivityByID);
router.post("/activities", activities.postActivity);
router.put("/activities/:id", activities.putActivity);
router.delete("/activities/:id", activities.deleteActivity);

router.get("/logs", logs.getAllLogs);
router.get("/logs/:id", logs.getLogByID);
router.post("/logs", logs.postLog);
router.put("/logs/:id", logs.putLog);
router.delete("/logs/:id", logs.deleteLog);

router.get("/teste", logs.postLog);

export { router }
