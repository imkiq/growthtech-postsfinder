const api = require('../config/api');

module.exports = async (req, res) => {
    const apiUsers = await api.get('users');

    const users = apiUsers.data;

    return users;
};