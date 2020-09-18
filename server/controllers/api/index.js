const db = require('../../models')


module.exports = {
  getData: (req, res) => {
    db.find({first: req.body.first})
  }
  

}