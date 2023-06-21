const mongoose = require('mongoose');

const tutorSchema = mongoose.Schema(
  {
    district: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    userProfile: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;
