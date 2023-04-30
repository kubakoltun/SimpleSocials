const express = require('express');
const app = express();
const db = require('./models');

//Routers
const postRouter = require('./routes/posts.js');
app.use('/posts', postRouter);

db.sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log('Server running on port 8000');
  });
});