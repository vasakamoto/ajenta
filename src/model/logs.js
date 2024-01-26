export default class Log {
    constructor(logID, log) {
        this.logID = logID;
        this.date = new Date().valueOf();
        this.log = log;
    }
}


