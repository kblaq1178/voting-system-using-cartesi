const storage = new Map();

exports.save = (item) => {
    storage.set(item.id, item);
};

exports.getById = (id) => {
    return storage.get(id);
};

exports.getAll = () => {
    return Array.from(storage.values());
};
