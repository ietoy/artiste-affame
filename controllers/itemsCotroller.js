const db = require("../models");

module.exports = {
    //get Item by ID
    findById: function (req, res) {
        db.Item.findById({ _id: req.params.id })
            .then(item => res.json(item))
            .catch(err => console.log(err));
    },
    //Insert new item
    create: function (req, res) {
        console.log("ADDING ITEM REQUEST");
        console.log(req.body);
        db.Item.create(req.body)
            .then(item => res.json(item))
            .catch(err => res.status(422).json(err));
    },
    //update item
    update: function (req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(item => res.json(item))
            .catch(err => res.status(422).json(err));
    },
    //remove item
    remove: function (req, res) {
        db.Item.findById({ _id: req.params.id })
            .then(item => item.remove())
            .then(item => res.json(item))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Item.find()
            .then(items => res.json(items))
            .catch(err => console.log(err));
    }
};
