const mongoose = require("mongoose");

const recurringDonationSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
    },
    type: {
      type: String,
      enum: ["monthly", "three_month", "six_month", "yearly"],
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

const TryRecurringDonation = mongoose.model(
  "Try_Recurring_donation",
  recurringDonationSchema
);

module.exports = TryRecurringDonation;
