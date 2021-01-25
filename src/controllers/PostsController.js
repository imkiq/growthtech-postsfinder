const getPosts = require('../services/getPosts');

exports.getPosts = async (req, res) => {
    const posts = await getPosts();
    res.send(posts);
}

exports.getPostById = async (req, res) => {
    const posts = await getPosts();
    const postId = req.params.id;

    const post = posts.find((item) => {
        return item.id == postId
    });
    res.send(post);
}