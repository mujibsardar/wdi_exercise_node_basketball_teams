const Team = require('../models/Teams.js')

module.exports = {
  index: (req, res) => {
    Team.find({}, (err, teamsFromDB) => {
      res.json(teamsFromDB)
    })
  },

  create: (req, res) => {
    Team.create(req.body, (err, newTeam) => {
      res.json({success: true, team: newTeam})
    })
  },

  show: (req, res) => {
    Team.findById(req.params.id, (err, singleTeam) => {
      res.json(singleTeam)
    })
  },

  update: (req, res) => {
    Team.findByIdAndUpdate(req.params.id, req.params.body, {new: true}, (err, updatedTeam) => {
      res.json({success: true, team: updatedTeam})
    })
  },

  destroy: (req, res) => {
    Team.findByIdAndRemove(req.params.id, (err, deletedTeam) => {
      res.json({success: true, removed: deletedTeam})
    })
  }
}
// change one
