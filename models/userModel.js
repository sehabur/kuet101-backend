const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
      unique: true,
    },
    batch: {
      type: String,
      required: true,
    },
    departmentLong: {
      type: String,
      required: true,
    },
    departmentShort: {
      type: String,
      required: true,
    },
    homeDistrict: {
      type: String,
      required: true,
    },
    currentlyLiveIn: {
      type: String,
      enum: ['insideBd', 'outsideBd'],
      required: true,
    },
    presentDistrict: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
    },
    linkedinProfileUrl: {
      type: String,
      required: true,
    },
    facebookProfileUrl: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    status: {
      type: String,
      enum: [
        'serviceHolder',
        'businessman',
        'seekingJob',
        'higherStudy',
        'runningStudent',
      ],
      required: true,
    },
    currentJobTitle: {
      type: String,
      required: true,
    },
    currentOrganization: {
      type: String,
      required: true,
    },
    selfReferralCode: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetToken: {
      type: String,
    },
    resetTokenExpiry: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
