class Activity {
    constructor(name, projectID, finished, deadline, comments) {
        this.name = name;
        this.projectID = projectID;
        this.finished = finished;
        this.deadline = deadline;
        this.comments = comments;
    }
}

class Project {
    constructor(name, activities, finished, deadline, comments) {
        this.name = name;
        this.activities = activities;
        this.finished = finished;
        this.deadline = deadline;
        this.comments = comments;
    }
}

export { Activity, Project }

