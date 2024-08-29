const Voter = require('../models/voter-model');
const RollupStateHandler = require('../shared/rollup-handler');
const voterStorage = require('../storage/voter-storage');
const { isValidVoter } = require('../shared/utils');

exports.registerVoter = async (req, res) => {
    try {
        const { name, id } = req.body;

        // Validate input
        if (!isValidVoter(name, id)) {
            return res.status(400).json({ error: "Invalid voter data." });
        }

        const newVoter = new Voter(name, id);

        // Save to storage
        voterStorage.save(newVoter);

        // Interact with Cartesi Rollups
        const rollupHandler = new RollupStateHandler();
        await rollupHandler.sendNotice(`Voter registered: ${newVoter.name}`);

        res.status(201).json(newVoter);
    } catch (error) {
        console.error("Error registering voter:", error);
        res.status(500).json({ error: "An error occurred while registering the voter." });
    }
};
