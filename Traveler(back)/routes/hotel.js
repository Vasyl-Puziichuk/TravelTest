const router = require("express").Router();
const hotelController = require("../controllers/hotelController");
const { verifyToken } = require("../middleware/jwt_token");

router.post("/", verifyToken, hotelController.addHotel);
router.get("/:id", hotelController.getHotelById);
router.get("/byCity/:id", hotelController.getHotelsByCity);
router.get("/search/:key", hotelController.search);

module.exports = router;
