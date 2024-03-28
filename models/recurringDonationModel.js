const mongoose = require("mongoose");

const recurringDonationSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ["1M", "3M", "6M", "1Y"],
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

const RecurringDonation = mongoose.model(
  "Recurring_donation",
  recurringDonationSchema
);

module.exports = RecurringDonation;
