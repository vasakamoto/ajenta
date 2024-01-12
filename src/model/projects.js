class Activity {
    constructor(name, comments, finished, deadline) {
        this.name = name;
        this.finished = finished;
        this.deadline = deadline;
        this.comments = comments;
    }
}

class Project {
    constructor(name, activities, comments, finished, deadline) {
        this.name = name;
        this.activities = activities;
        this.finished = finished;
        this.deadline = deadline;
        this.comments = comments;
    }
}

export { Activity, Project }

