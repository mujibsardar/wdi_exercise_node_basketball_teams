const
  mongoose = require('mongoose'),
  teamSchema = {
    name: {type: String},
    state: {type: String}
  }

  module.exports = mongoose.model('Team', teamSchema)
