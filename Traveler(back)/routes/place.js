const router = require("express").Router();
const placeController = require("../controllers/placeController");
const { verifyToken } = require("../middleware/jwt_token");

router.post("/", verifyToken, placeController.addPlaces);
router.get("/", placeController.getPlaces);
router.get("/:id", placeController.getPlace);
router.get("/byCity/:id", placeController.getPlacesByCity);
router.get("/search/:key", placeController.search);

module.exports = router;
