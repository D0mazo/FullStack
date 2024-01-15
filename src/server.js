'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'James', town: "London" },
  { id: 2, name: 'Bob', town: "Londo" },
  { id: 3, name: 'Luke', town: "Lond" },
  { id: 4, name: 'Jane', town: "Lon" }
];

// middleware
app.use(morgan("dev"));
app.use(cors()); // to fix cors error

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// post - add

// return all users
app.get('/api/users', (request, response) => {
  response.json(users);
});

// return specific user by ID
app.get('/api/users/:userId', (request, response) => {
  const userId = +request.params.userId;

  // find user by ID
  const found = users.find((userObj) => userId === userObj.id);

  // if user not found, send 404 status
  if (!found) {
    response.status(404).json({ error: 'User not found' });
    return;
  }

  response.json(found);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
