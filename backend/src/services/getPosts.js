const api = require('../config/api');

module.exports = async (req, res) => {
    const apiPosts = await api.get('posts');

    const posts = apiPosts.data;

    return posts;
};