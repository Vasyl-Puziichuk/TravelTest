const User = require("../models/User");

module.exports = {
  deleteUser: async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.user.id);

      res
        .status(200)
        .json({ status: true, message: "User Succesfully Deleted" });
    } catch (error) {
      return next(error);
    }
  },

  getUser: async (req, res, next) => {
    const user_id = req.user.id;
    console.log(user_id);

    try {
      const user = await User.findById(
        { _id: user_id },
        { password: 0, __v: 0, updatedAt: 0 }
      );

      if (!user) {
        return res
          .status(401)
          .json({ status: false, message: "User Does Not Exist" });
      }

      res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  },
};
