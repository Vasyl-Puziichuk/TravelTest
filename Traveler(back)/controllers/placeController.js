const Place = require("../models/Places");

module.exports = {
  addPlaces: async (req, res, next) => {
    const {
      city_id,
      description,
      imageUrl,
      location,
      contact_id,
      title,
      rating,
      review,
      latitude,
      longitude,
    } = req.body;

    try {
      const newPlace = new Place({
        city_id,
        description,
        imageUrl,
        location,
        contact_id,
        title,
        rating,
        review,
        latitude,
        longitude,
      });

      await newPlace.save();

      res.status(201).json({ status: true });
    } catch (error) {
      return next(error);
    }
  },

  getPlaces: async (req, res, next) => {
    try {
      const limitParams = req.query.limit;
      let query = Place.find(
        {},
        "_id review rating imageUrl title city_id location"
      );

      if (limitParams !== "all") {
        const limit = parseInt(limitParams) || 5;
        query = query.limit(limit);
      }
      const places = await query.exec();
      res.status(200).json({ places });
    } catch (error) {
      return next(error);
    }
  },

  getPlace: async (req, res, next) => {
    const placeId = req.params.id;

    try {
      const place = await Place.findById(placeId, {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      }).populate({
        path: "popular",
        select: "title rating review imageUrl location",
      });

      res.status(200).json({ place });
    } catch (error) {
      return next(error);
    }
  },

  getPlacesByCity: async (req, res, next) => {
    const cityId = req.params.id;

    try {
      const places = await Place.find(
        { city_id: cityId },
        { createdAt: 0, updatedAt: 0, __v: 0 }
      );

      if (places.length === 0) {
        return res.status(200).json([]);
      }

      res.status(200).json({ places });
    } catch (error) {
      return next(error);
    }
  },

  search: async (req, res, next) => {
    try {
      const results = await Place.aggregate([
        {
          $search: {
            index: "places",
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
