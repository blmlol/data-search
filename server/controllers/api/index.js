const db = require('../../models');


module.exports = {
  getData: (req, res) => {
    console.log(req);
    db.Name.find({ first: req.body.first }).then(function (data) {

      res.json(data);
    })
  },

  getAll: (req, res) => {
    console.log(req.body);
    db.Name.find().then(function (data) {
      res.json(data);
    })
  }


}