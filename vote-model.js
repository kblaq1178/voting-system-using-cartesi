class Vote {
    constructor(voterId, proposalId, vote) {
        this.id = Date.now().toString(); // Simplified ID generation
        this.voterId = voterId;
        this.proposalId = proposalId;
        this.vote = vote;
    }
}

module.exports = Vote;
