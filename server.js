const express = require('express');

const userRouter = require('./users/userRouter')
const postRouter = require('./posts/postRouter')

const server = express();

// middleware to be applied on all requests
server.use(express.json())
server.use(logger)

// router modules
server.use('/api/users', userRouter)
server.use('/api/users/:id/posts', postRouter)


// base request
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`
    ${req.method} on ${req.url} ${new Date}
  `)
  next()
}

module.exports = server;
