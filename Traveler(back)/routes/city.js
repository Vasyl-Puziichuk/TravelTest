const router = require("express").Router();
const cityController = require("../controllers/cityController");
const { verifyToken } = require("../middleware/jwt_token");

router.post("/", verifyToken, cityController.addCity);
router.get("/", cityController.getCities);
router.get("/:id", cityController.getCity);
router.post("/places", cityController.addPlacesToCity);

module.exports = router;
