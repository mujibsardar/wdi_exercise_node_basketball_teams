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

  app.get('/teams/:id', (req, res) => {
    Team.findById(req.params.id, (err, singleTeam) => {
      res.json(singleTeam)
    })
  })

  app.patch('/teams/:id', (req, res) => {
    Team.findByIdAndUpdate(req.params.id, req.params.body, {new: true}, (err, updatedTeam) => {
      res.json({success: true, team: updatedTeam})
    })
  })

  app.delete('/teams/:id', (req, res) => {
    Team.findByIdAndRemove(req.params.id, (err, deletedTeam) => {
      res.json({success: true, removed: deletedTeam})
    })
  })

app.listen(3000, (err) => {
  console.log(err || "Server running on 3000.");
})
