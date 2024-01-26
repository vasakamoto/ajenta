class Activity {
    constructor(activityID, activity, projectID, finished, deadline, comments) {
        this.activityID = activityID;
        this.activity = activity;
        this.projectID = projectID;
        this.finished = finished;
        this.deadline = deadline;
        this.comments = comments;
    }
}

class Project {
    constructor(projectID, project, activities, finished, deadline, comments) {
        this.projectID = projectID;
        this.project = project;
        this.activities = activities;
        this.finished = finished;
        this.deadline = deadline;
        this.comments = comments;
    }
}

export { Activity, Project }

