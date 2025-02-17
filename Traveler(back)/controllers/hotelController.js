const Hotel = require("../models/Hotels");

module.exports = {
  addHotel: async (req, res, next) => {
    const {
      city_id,
      title,
      description,
      availability,
      contact,
      imageUrl,
      rating,
      review,
      location,
      coordinates,
      price,
      facilities,
    } = req.body;

    try {
      const newHotel = new Hotel({
        city_id,
        title,
        description,
        availability,
        contact,
        imageUrl,
        rating,
        review,
        location,
        coordinates,
        price,
        facilities,
      });

      await newHotel.save();

      res.status(200).json({ status: true });
    } catch (error) {
      return next(error);
    }
  },

  getHotelsByCity: async (req, res, next) => {
    const cityId = req.params.id;

    const limitParam = req.query.limit;

    const limit = parseInt(limitParam);

    try {
      const hotels = await Hotel.find(
        { city_id: cityId },
        "_id review rating imageUrl title city_id location"
      ).limit(limit);
      if (hotels.length === 0) {
        return res.status(200).json([]);
      }

      res.status(200).json(hotels);
    } catch (error) {
      return next(error);
    }
  },

  getHotelById: async (req, res, next) => {
    const hotelId = req.params.id;

    try {
      const hotel = await Hotel.findById(hotelId).populate({
        path: "reviews",
        options: { sort: { updatedAt: -1 }, limit: 2 },
        select: "rating review updatedAt user",
        populate: {
          path: "user",
          model: "User",
          select: "username profile",
        },
      });

      if (!hotel) {
        return res
          .status(404)
          .json({ status: false, message: "Hotel does not exist" });
      }

      res.status(200).json({ hotel });
    } catch (error) {
      return next(error);
    }
  },

  search: async (req, res, next) => {
    try {
      const results = await Hotel.aggregate([
        {
          $search: {
            index: "hotels",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(results);
    } catch (error) {
      return next(error);
    }
  },
};
