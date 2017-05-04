const
  express = require('express'),
  teamRouter = express.Router(),
  teamsCtrl = require('../controllers/teams.js')

  teamRouter.route('/')
    .get(teamsCtrl.index)
    .post(teamsCtrl.create)

  teamRouter.route('/:id')
    .get(teamsCtrl.show)
    .patch(teamsCtrl.update)
    .delete(teamsCtrl.destroy)

module.express = teamRouter
