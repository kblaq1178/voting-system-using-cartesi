const Vote = require('../models/vote-model');
const RollupStateHandler = require('../shared/rollup-handler');
const voteStorage = require('../storage/vote-storage');
const { isValidVote } = require('../shared/utils');

exports.castVote = async (req, res) => {
    try {
        const { voterId, proposalId, vote } = req.body;

        // Validate input
        if (!isValidVote(voterId, proposalId, vote)) {
            return res.status(400).json({ error: "Invalid vote data." });
        }

        const newVote = new Vote(voterId, proposalId, vote);

        // Save to storage
        voteStorage.save(newVote);

        // Interact with Cartesi Rollups
        const rollupHandler = new RollupStateHandler();
        await rollupHandler.sendNotice(`Vote cast by Voter ${voterId} on Proposal ${proposalId}`);

        res.status(201).json(newVote);
    } catch (error) {
        console.error("Error casting vote:", error);
        res.status(500).json({ error: "An error occurred while casting the vote." });
    }
};
