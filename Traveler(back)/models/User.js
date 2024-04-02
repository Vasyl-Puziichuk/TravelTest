const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    profile: {
      type: String,
      default:
        "https://e7.pngegg.com/pngimages/981/645/png-clipart-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-thumbnail.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
