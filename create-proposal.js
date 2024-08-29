const Proposal = require('../models/proposal-model');
const RollupStateHandler = require('../shared/rollup-handler');
const proposalStorage = require('../storage/proposal-storage');
const { isValidProposal } = require('../shared/utils');

exports.createProposal = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validate input
        if (!isValidProposal(title, description)) {
            return res.status(400).json({ error: "Invalid proposal data." });
        }

        const newProposal = new Proposal(title, description);

        // Save to storage
        proposalStorage.save(newProposal);

        // Interact with Cartesi Rollups
        const rollupHandler = new RollupStateHandler();
        await rollupHandler.sendNotice(`Proposal created: ${newProposal.title}`);

        res.status(201).json(newProposal);
    } catch (error) {
        console.error("Error creating proposal:", error);
        res.status(500).json({ error: "An error occurred while creating the proposal." });
    }
};
