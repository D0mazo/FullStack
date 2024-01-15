'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { request } = require('http');
const app = express();
const port = 3000;

let users = [
  { id: 1, name: 'James', town: "London", isDriver: false },
  { id: 2, name: 'Bob', town: "Londo", isDriver: true },
  { id: 3, name: 'Luke', town: "Lond", isDriver: false },
  { id: 4, name: 'Jane', town: "Lon", isDriver: true }
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

// get - vairuotojai isDriver = true;
app.get('/api/users/isDriver', (request, response) => {
  const driverArr = users.filter((uObj) => uObj.isDriver === true);
  console.log('driverArr ===', driverArr);
  response.json(driverArr);
});

//get - visi mieste masyve
app.get('/api/users/town', (request, response) => {
  const townsArr = users.map((uObj) => uObj.town);
  console.log('townsArr ===', townsArr);
  response.json(townsArr);
});

// return specific user by ID
app.get('/api/users/:userId', (request, response) => {
  const userId = +request.params.userId;

  // find user by ID
  const found = users.find((userObj) => userId === userObj.id);

  // if user not found, send 404 status
  if (found === undefined) {
    response.status(404).json({ error: 'User not found' });
    return;
  } 
  response.json(found);
});

// delete
app.delete('/api/users/:userId', (request, response) => {
  const userId = +request.params.userId;
  // remove the user with the specified ID from the 'users' array
  users = users.filter((uObj) => uObj.id !== userId);
  console.log("users ===", users);
  response.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
