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
        console.log("CREATE PAINTING REQ");
        console.log(req.body);
        db.Painting.create(req.body)
            .then(painting => {
                res.json(painting)
                db.User.findOneAndUpdate({ _id: painting.painter }, { $push: { portfolio: painting._id } })
                    .then(data => console.log(data));
            }).catch(err => res.status(422).json(err));
    },
    //update Painting
    update: function (req, res) {
        // finds the painting with the matching id and increment its likes value by 1
        db.Painting.findOneAndUpdate({ _id: req.params.id }, {$inc: {likes: 1}})
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
        db.Painting.find({ galleryShowing: true })
            .then(paintings => res.json(paintings))
            .catch(err => console.log(err));
    },
    getPortfolio: function (req, res) {
        db.Painting.find({ painter: req.params.id })
            .then(paintings => res.json(paintings))
            .catch(err => console.log(err));
    }
};
