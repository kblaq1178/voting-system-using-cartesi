exports.isValidProposal = (title, description) => {
    return title && title.trim() !== '' && description && description.trim() !== '';
};

exports.isValidVoter = (name, id) => {
    return name && name.trim() !== '' && id && id.trim() !== '';
};

exports.isValidVote = (voterId, proposalId, vote) => {
    return voterId && voterId.trim() !== '' && proposalId && proposalId.trim() !== '' && typeof vote === 'boolean';
};


