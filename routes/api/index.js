const router = require("express").Router();
const userRoutes = require("./users");
const paintingRoutes = require("./paintings");

router.use("/users", userRoutes);
router.use("/paintings", paintingRoutes);

module.exports = router;
