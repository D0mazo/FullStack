'use strict';

const express = require('express');
const { request } = require('http');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const port = 3000

const users = [
  { id: 1, name:'James', town:"London"},
  { id: 2, name:'Bob', town:"Londo"},
  { id: 3, name:'Luke', town:"Lond"},
  { id: 4, name:'Jane', town:"Lon"}
  
];

//midleware
app.use(morgan("dev"));
app.use(cors()); // to fix cors error

//Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//post - add


//grazinti visus
app.get('/api/users', (request, response) => {
  response.json(users);
});

//konkretu
app.get('/api/users/:userId', (request, response) => {
  console.log("request.params ===", request.params);
  const userId = +request.params.userId; // Fix the typo here
  //surasti objekta su id === userId, ir ji grazinti;
  const found = users.find((userObj) => userId === userObj.id);
  console.log('found ===', found);
  response.json('trying to get single post');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})