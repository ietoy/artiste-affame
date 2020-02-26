const router = require("express").Router();
const paintingsController = require("../../controllers/paintingsController")

router.route("/gallery")
    .get(paintingsController.findShown)

router.route("/add/:id")
    .post(paintingsController.create)

router.route("/portfolio/:id")
    .get(paintingsController.getPortfolio)
        // get user id from global state
        // add this to new painting obj
        // send new painting object to paintings
        // and to user obj

        // we call this in the client side
        // by making an axios request
        // "/api/add"
        // this axios call sends over req.body with 
        // user id included
        // send this as params/:id for any user
    


module.exports = router;