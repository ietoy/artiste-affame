const db = require("../models");

// Defining methods for the productsController
module.exports = {
    //Creates a user
    //req.body shall be a user object
    signUp: function (req, res) {
        console.log("SIGNUP REQUEST");
        console.log(req.body);
        db.User.create(req.body)
            .then(data => res.json(data))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //Adds items to user's inventory
    // req.params.id shall be a user ID
    // req.body shall be an array of objects with each object having a key of item ID and amount # [{itemID, amount#}, ...]
    addItems: function (req, res) {
        console.log("ADDING ITEM TO USER REQUEST");
        console.log("PARAMS / USERID");
        console.log(req.params);
        console.log("BODY / CART");
        console.log(req.body);
        db.User.findOne({ _id: req.params.id })
            .then(user => {
                console.log("USER FOUND!");
                console.log(user);
                var userInventory = user.inventory;
                var cart = req.body;
                //checks each car item against each item in the user inventory. 
                //If it is found we update the amount in the user inventory.
                // if it is not found we add the item
                cart.forEach(item => {
                    var found = false;
                    for (var i = 0; i < userInventory.length && !found; i++) {
                        if (item._id == userInventory[i]._id) {
                            userInventory[i].amount += item.amount;
                            found = true;
                        }
                    }
                    if (!found) {
                        userInventory.push(item);
                    }
                });
                console.log("USER INVENTORY AFTER ADDING ITEMS");
                console.log(userInventory);
                user.inventory = userInventory;
                res.json(user);

                //Update user inventory with the cart items already in there
                db.User.findByIdAndUpdate({ _id: user._id }, { inventory: userInventory })
                    .then(data => console.log(data));
                // .then(data => res.json(data))
                // .catch(err => {
                //     console.log(err);
                //     res.status(400).json(err);
                // });
            }).catch(err => {
                console.log(err);
                res.status(400).json(err);
            });

    },
    //Use item decreases the amount of a specific item. deleting the item if there's only one
    //req.params.id shall be user ID
    //req.body shall be item ID
    useItem: function (req, res) {
        console.log("USE ITEM REQUEST");
        console.log("PARAMS / USERID");
        console.log(req.params);
        console.log("BODY");
        console.log(req.body);
        db.User.findOne({ _id: req.params.id })
            .then(user => {
                console.log("USER FOUND!");
                console.log(user);
                var userInventory = user.inventory;
                var index = -1;
                //Checks each item in user inventory. Once the item is found, save id 
                // userInventory.forEach(item => {
                for (var i = 0; i < userInventory.length; i++) {
                    if (userInventory[i]._id == req.body._id) {
                        index = i;
                        break;
                    }
                }
                console.log("FOUND INDEX");
                console.log(index);
                // });
                //If the amount of the item is 1, delete item. Else decrement item amount
                if (userInventory[index].amount === 1) {
                    userInventory.splice(i, 1);
                } else {
                    userInventory[index].amount--;
                }
                console.log("USER INVENTORY AFTER USING ITEM");
                console.log(userInventory);
                user.inventory = userInventory;

                res.json(user);
                db.User.findByIdAndUpdate({ _id: user._id }, { inventory: userInventory })
                    .then(data => console.log(data));
                // .catch(err => {
                //     console.log(err);
                //     res.status(400).json(err);
                // });
            }).catch(err => {
                console.log(err);
                res.status(400).json(err);
            });


    },
    update: function (req, res) {
        console.log("UPDATE USER REQUEST");
        console.log("ID", req.params.id);
        console.log("User", req.body);

        console.log("Coins", req.body.coins);
        db.User.findOneAndReplace({ _id: req.params.id }, req.body)
            .then(user => res.json(user))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
};