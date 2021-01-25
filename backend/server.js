require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../frontend/public')));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/users', require('./src/routes/UsersRoute'));
app.use('/posts', require('./src/routes/PostsRoute'));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../frontend/public/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});