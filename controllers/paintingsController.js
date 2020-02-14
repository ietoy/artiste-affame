const db = require("../models");

module.exports = {
    //get Painting by ID
    findById: function (req, res) {
        db.Painting.findById({ _id: req.params.id })
            .then(painting => res.json(painting))
            .catch(err => console.log(err));
    },
    //Insert new Painting
    create: function (req, res) {
        db.Painting.create(req.body)
            .then(painting => {
                db.User.findOneAndUpdate({_id: painting.painter}, { $push: { portfolio: painting._id } });
                res.json(painting)
            })
            .catch(err => res.status(422).json(err));
    },
    //update Painting
    update: function (req, res) {
        db.Painting.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(painting => res.json(painting))
            .catch(err => res.status(422).json(err));
    },
    //remove Painting
    remove: function (req, res) {
        db.Painting.findById({ _id: req.params.id })
            .then(painting => painting.remove())
            .then(painting => res.json(painting))
            .catch(err => res.status(422).json(err));
    },
    findShown: function (req, res) {
        db.Painting.find({galleryShowing: true})
        .then(paintings => res.json(paintings))
        .catch(err => console.log(err));
    }
};
