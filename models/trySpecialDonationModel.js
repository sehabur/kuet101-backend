const mongoose = require("mongoose");

const specialDonationSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["birthday", "anniversary", "iftar", "zakat", "other"],
      required: true,
    },
    description: {
      type: String,
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

const TrySpecialDonation = mongoose.model(
  "Try_special_donation",
  specialDonationSchema
);

module.exports = TrySpecialDonation;