const db = require("../models");

// Defining methods for the productsController
module.exports = {
  signUp: function(req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
    },
  addItems: function(req, res) {
    db.User.findOne( {_id: req.params.id}})
};