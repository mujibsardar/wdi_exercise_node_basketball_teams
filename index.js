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

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/teams', (req, res) => {
  Team.find({}, (err, teamsFromDB) => {
    res.json(teamsFromDB)
  })
})

app.post('/teams', (req, res) => {
  Team.create(req.body, (err, newTeam) => {
    res.join({success: true, team: newTeam})
  })
})

app.get('/teams/:id', (req, res) => {
  Team.findById(req.params.id, (err, singleTeam) => {
    res.json(singleTeam)
  })
})














app.listen(3000, (err) => {
  console.log(err || "Server running on 3000.");
})
