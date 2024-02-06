import express from "express";
import * as chores from "./chores.js";
import * as logs from "./logs.js";
import * as projects from "./projects.js";
import * as activities from "./activities.js";
import * as header from "./header.js";

const router = express.Router();

router.get("/pendencies", );

router.get("/deadlines", );

router.get("/monthly-commitments", );

router.get("/header-date", header.getDate);

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

router.get("/projects/:projectid/activities", activities.getAllActivities);
router.get("/projects/:projectid/activities/:activityid", activities.getActivityByID);
router.get("/activities/:activityid", activities.getActivityByID);
router.post("/projects/:projectid/activities", activities.postActivity);
router.put("/activities/:activityid", activities.putActivity);
router.delete("/activities/:activityid", activities.deleteActivity);

router.get("/logs", logs.getAllLogs);
router.get("/logs/:id", logs.getLogByID);
router.post("/logs", logs.postLog);
router.put("/logs/:id", logs.putLog);
router.delete("/logs/:id", logs.deleteLog);

export { router }
