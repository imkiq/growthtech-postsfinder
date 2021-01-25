const getUsers = require('../services/getUsers');
const getPosts = require('../services/getPosts');

exports.getUsers = async (req, res) => {
    const users = await getUsers();
    res.send(users);
}

exports.getPostsByUser = async (req, res) => {
    const posts = await getPosts();

    const userId = req.params.id;
    const postByUser = posts.filter((item)=> {
        return userId == item.userId
    });

    res.send(postByUser);
}