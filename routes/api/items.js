const router = require("express").Router();
const itemsController = require("../../controllers/itemsCotroller");

router.route("/store")
    .get(itemsController.findAll)


router.route("/add")
    .post(itemsController.create)

module.exports = router;

