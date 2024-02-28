const mongoose = require("mongoose");

const toletSchema = mongoose.Schema(
  {
    district: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["bachelor", "family"],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    userProfile: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Tolet = mongoose.model("Tolet", toletSchema);

module.exports = Tolet;
