const mongoose = require('mongoose');

const settingSchema = mongoose.Schema(
  {
    userVerificationEnabled: {
      type: Number,
      enum: [0, 1],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;
