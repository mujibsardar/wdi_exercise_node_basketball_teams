const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose =require('mongoose'),
  Team = require('./models/Team.js')

  mongoose.connect('mongodb://localhost/basketball', (err) => {
    console.log(err || "Connected to mongo!")
  })















app.listen(3000, (err) => {
  console.log(err || "Server running on 3000.");
})
