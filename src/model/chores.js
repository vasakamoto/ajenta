export default class Chore {
    constructor(choreID, chore, frequency, quantity, finished, comments) {
        this.choreID = choreID;
        this.chore = chore;
        this.frequency = frequency;
        this.quantity = quantity;
        this.finished = finished;
        this.comments = comments;
    }
}
