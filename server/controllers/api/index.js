const db = require('../../models');


module.exports = {
  getData: (req, res) => {;
    db.Name.find({first: req.body.first}).then(data => res.json(data))
  }


}