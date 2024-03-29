const mongoose = require("mongoose");

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
      enum: ["insideBd", "outsideBd"],
      required: true,
    },
    presentDistrict: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-", "N/A"],
      required: true,
    },
    bloodDonationEnable: {
      type: Boolean,
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
    },
    facebookProfileUrl: {
      type: String,
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
        "serviceHolder",
        "businessman",
        "seekingJob",
        "higherStudy",
        "runningStudent",
      ],
      required: true,
    },
    currentJobTitle: {
      type: String,
    },
    currentOrganization: {
      type: String,
    },
    registrationNo: { type: String },

    interests: [{ type: String }],

    expertin: [{ type: String }],

    selfReferralCode: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: false,
    },
    approvalStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      required: true,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    adminRole: {
      type: String,
      enum: ["superAdmin", "editor", "try"],
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
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

const User = mongoose.model("User", userSchema);

module.exports = User;
