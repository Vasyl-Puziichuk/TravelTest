const City = require("../models/Cities");

module.exports = {
  addCity: async (req, res, next) => {
    const { city, description, imageUrl, region, popular } = req.body;

    try {
      const newCity = new City({
        city,
        description,
        imageUrl,
        region,
        popular,
      });

      await newCity.save();

      res.status(201).json({ status: true });
    } catch (error) {
      return next(error);
    }
  },
  addPlacesToCity: async (req, res, next) => {
    const { cityId, placeId } = req.body;

    try {
      const city = await City.findById(cityId);

      if (!city) {
        return res.status(404).json({ message: "Country not found" });
      }

      const index = city.popular.indexOf(placeId);

      if (index !== -1) {
        city.popular.splice(index, 1);
      } else {
        city.popular.push(placeId);
      }

      await city.save();

      res.status(200).json({ status: true });
    } catch (error) {
      return next(error);
    }
  },
  getCities: async (req, res, next) => {
    try {
      const cities = await City.find({}, { city: 1, _id: 1, imageUrl: 1 });

      res.status(200).json({ cities });
    } catch (error) {
      return next(error);
    }
  },
  getCity: async (req, res, next) => {
    const cityId = req.params.id;

    try {
      const city = await City.findById(cityId, {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      }).populate({
        path: "popular",
        select: "title rating review imageUrl location",
      });

      res.status(200).json(city);
    } catch (error) {
      return next(error);
    }
  },
};
