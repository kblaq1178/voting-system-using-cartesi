class Proposal {
    constructor(title, description) {
        this.id = Date.now().toString(); 
        this.title = title;
        this.description = description;
    }
}

module.exports = Proposal;
