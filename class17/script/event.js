export default class Event {
    constructor() {
        this.description = '';
        this.date = '';
        this.local = '';
    }

    setDescription(description) {
        this.description = description;
    }

    setDate(date) {
        this.date = date;
    }

    setLocal(local) {
        this.local = local;
    }

    getDescription() {
        console.log(this.description);
    }

    getDate() {
        return this.date;
    }

    getLocal() {
        return this.local;
    }
}
