class Activity {
    constructor(activityID, activity, projectID, finished, finishedAtEpoch, finishedAtDate, deadlineEpoch, deadlineDate, comments) {
        this.activityID = activityID;
        this.activity = activity;
        this.projectID = projectID;
        this.finished = finished;
        this.finishedAtEpoch = finishedAtEpoch;
        this.finishedAtDate = finishedAtDate;
        this.deadlineEpoch = deadlineEpoch;
        this.deadlineDate = deadlineDate;
        this.comments = comments;
    }
}

class Project {
    constructor(projectID, project, activities, finished, finishedAtEpoch, finishedAtDate, deadlineEpoch, deadlineDate, comments) {
        this.projectID = projectID;
        this.project = project;
        this.activities = activities;
        this.finished = finished;
        this.finishedAtEpoch = finishedAtEpoch;
        this.finishedAtDate = finishedAtDate;
        this.deadlineEpoch = deadlineEpoch;
        this.deadlineDate = deadlineDate;
        this.comments = comments;
    }
}

export { Activity, Project }
