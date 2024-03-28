const mongoose = require("mongoose");

const tryActiveDonorSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["company", "university"],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const TryActiveDonor = mongoose.model("Try_active_donor", tryActiveDonorSchema);

module.exports = TryActiveDonor;
