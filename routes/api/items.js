const router = require("express").Router();
const itemsController = require("../../controllers/itemsCotroller");

router.route("/store")
    .get(itemsController.findAll)

router.route("/checkout/:id")
    .post(usersController.addItems)

