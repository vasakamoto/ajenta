import * as db from "./database.js";
import pug from "pug";

async function projectsBehindSchedule() {
    const projects = await db.selectEverything("projects");
    const pendentProjects = [];
    const currentDate = new Date().valueOf();
    for(let index in projects) {
        let isFinished = (projects[index].activities === projects[index].finished);
        let isBehindSchedule = (projects[index].deadline - currentDate <= 0);
        if(!isFinished && isBehindSchedule){
            pendentProjects.push(projects[x])
        }
    }
    return pendentProjects;
}

async function activitiesBehindSchedule() {
    const activities = await db.selectEverything("activities");
    const pendentActivities = [];
    const currentDate = new Date().valueOf();
    for(let index in activities) {
        let isFinished = (activities[index].finished === 1);
        let isBehindSchedule = (activities[index].deadline - currentDate <= 0);
        if(!isFinished && isBehindSchedule){
            pendentActivities.push(activities[x])
        }
    }
    return pendentActivities;
}

async function choresBehindSchedule() {
    const chores = await db.selectEverything("chores");
    const pendentChores = [];
    const currentDate = new Date().valueOf();
    const currentYear = new Date(2024, 0, 1).valueOf();
    const currentWeek = Math.ceil((currentDate - currentYear) / (1000 * 3600 * 24 * 7));
    const currentMonth = new Date().getMonth() + 1;
    for(let index in chores) {
        if(chores[index].frequency === "weekly") {
            let timesDone = chores[index].quantity * currentWeek;    
            if(timesDone < chores[index].finished) {
                pendentChores.push(chores[index]);
            }
        }
        if(chores[index].frequency === "biweekly") {
            let timesDone = chores[index].quantity * currentWeek / 2;    
            if(timesDone < chores[index].finished) {
                pendentChores.push(chores[index]);
            }
        }
        if(chores[index].frequency === "monthly") {
            let timesDone = chores[index].quantity * currentMonth;    
            if(timesDone < chores[index].finished) {
                pendentChores.push(chores[index]);
            }
        }
        if(chores[index].frequency === "bimonthly") {
            let timesDone = chores[index].quantity * currentMonth / 2;    
            if(timesDone < chores[index].finished) {
                pendentChores.push(chores[index]);
            }
        }
        if(chores[index].frequency === "trimonthly") {
            let timesDone = chores[index].quantity * currentMonth / 3;    
            if(timesDone < chores[index].finished) {
                pendentChores.push(chores[index]);
            }
        }
        if(chores[index].frequency === "semesterly") {
            let timesDone = chores[index].quantity * currentMonth / 6;    
            if(timesDone < chores[index].finished) {
                pendentChores.push(chores[index]);
            }
        }
        if(chores[index].frequency === "annualy") {
            let timesDone = chores[index].quantity * currentMonth / 12;    
            if(timesDone < chores[index].finished) {
                pendentChores.push(chores[index]);
            }
        }
    } 
    return pendentChores;
}

async function getPendencies(req, res) {
    const pendentProjects = await projectsBehindSchedule();
    const pendentActivities = await activitiesBehindSchedule();
    const pendentChores = await choresBehindSchedule();
}

export { projectsBehindSchedule, activitiesBehindSchedule, choresBehindSchedule, getPendencies };
