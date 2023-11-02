const mongoose = require('mongoose');

const galleryImageSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    batch: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const GalleryImage = mongoose.model('GalleryImage', galleryImageSchema);

module.exports = GalleryImage;
