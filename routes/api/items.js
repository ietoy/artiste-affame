const router = require("express").Router();
const itemsController = require("../../controllers/itemsCotroller");

router.route("/store")
    .get(itemsController.findAll)

router.route("/add")
    .post(itemsController.create)

router.route("/:id")
    .get(itemsController.findById)

module.exports = router;

