const router = require("express").Router();
const userRoutes = require("./users");
const paintingRoutes = require("./paintings");
const itemRoutes = require("./items");

router.use("/users", userRoutes);
router.use("/paintings", paintingRoutes);
router.use("/items", itemRoutes);

module.exports = router;
