const createError = require("http-errors");
const { validationResult } = require("express-validator");
const url = require("url");
const {
  uploadMultipleImage,
  uploadSingleImage,
  deleteMultipleImage,
  deleteSingleImage,
} = require("../middlewares/fileUpload");

const TryDonation = require("../models/tryDonationModel");
const TrySpecialDonation = require("../models/trySpecialDonationModel");
const TryRecurringDonation = require("../models/tryRecurringDonationModel");
const TryActiveDonor = require("../models/tryActiveDonorModel");

/*
  @api:       GET /api/try/donation
  @desc:      get all donations
  @access:    private
*/
const getDonations = async (req, res, next) => {
  try {
    const donations = await TryDonation.find().sort({ createdAt: "desc" });
    res.status(200).json({ donations });
  } catch (err) {
    const error = createError(500, "No donations found");
    next(error);
  }
};

/*
  @api:       GET /api/try/activeDonor
  @desc:      get all donations
  @access:    private
*/
const getActiveDonors = async (req, res, next) => {
  try {
    const donors = await TryActiveDonor.find({
      isActive: true,
    }).sort({ createdAt: "desc" });
    res.status(200).json({ donors });
  } catch (err) {
    const error = createError(500, "No active donor found");
    next(error);
  }
};

/*
  @api:       GET /api/try/donation/:id
  @desc:      get a post by its Id
  @access:    private
*/
const getDonationById = async (req, res, next) => {
  try {
    const donation = await TryDonation.findById(req.params.id)
      .select("-__v")
      .populate(
        "user",
        "-password -isAdmin -isVerified -resetToken -resetTokenExpiry -__v"
      );

    if (donation) {
      res.status(200).json({ donation });
    } else {
      const error = createError(404, "No donation found");
      next(error);
    }
  } catch (err) {
    const error = createError(500, "No donation found");
    next(error);
  }
};

/*
  @api:       POST /api/try/specialDonation
  @desc:      Create a new special donation
  @access:    private
*/
const createSpecialDonation = async (req, res, next) => {
  try {
    const { amount, description, type } = req.body;

    const createdNewDonation = await TrySpecialDonation.create({
      amount,
      description,
      type,
      isActive: true,
      user: req.user.id,
    });

    res
      .status(201)
      .json({ message: "Post created successfully", post: createdNewDonation });
  } catch (err) {
    const error = createError(500, err.message);
    next(error);
  }
};

/*
  @api:       POST /api/try/recurringDonation
  @desc:      Create a new recurring donation
  @access:    private
*/
const createRecurringDonation = async (req, res, next) => {
  try {
    const { amount, description, type } = req.body;

    const createdNewDonation = await TryRecurringDonation.create({
      amount,
      description,
      type,
      isActive: true,
      user: req.user.id,
    });

    res
      .status(201)
      .json({ message: "Post created successfully", post: createdNewDonation });
  } catch (err) {
    const error = createError(500, err.message);
    next(error);
  }
};

// <------------- Try admin panel -------------> //

/*
  @api:       POST /api/try/donation
  @desc:      Create a new create donation
  @access:    private, try admin only
*/
const createDonation = async (req, res, next) => {
  try {
    const { title, description, paymentDetails } = req.body;

    const images = req?.files
      ? await uploadMultipleImage(req.files, "try/")
      : null;

    //   const newPost = new Post({
    //     title,
    //     description,
    //     category,
    //     images,
    //     user: req.user.id,
    //   });
    //   const createdNewDonation = await newPost.save();

    const createdNewDonation = await TryDonation.create({
      title,
      description,
      paymentDetails,
      images,
      isActive: true,
      user: req.user.id,
    });

    res
      .status(201)
      .json({ message: "Post created successfully", post: createdNewDonation });
  } catch (err) {
    const error = createError(500, err.message);
    next(error);
  }
};

/*
  @api:       PATCH /api/try/donation/
  @desc:      Create a new create donation
  @access:    private, try admin only
*/
const updateDonationById = async (req, res, next) => {
  try {
    const { postId, isActive } = req.body;

    const post = await TryDonation.findById(postId);

    if (post) {
      const updatePost = await TryDonation.updateOne(
        { _id: postId },
        { isActive: isActive }
      );

      if (updatePost.modifiedCount === 1) {
        res.status(201).json({
          message: "Post edit successful",
          postId,
        });
      } else {
        res.status(400).json({
          message: "Post edit failed",
        });
      }
    } else {
      res.status(400).json({
        message: "Post edit failed as post not found",
      });
    }
  } catch (err) {
    const error = createError(500, err.message);
    next(error);
  }
};

/*
  @api:       DELETE /api/try/donation/:id
  @desc:      Delete a post
  @access:    private, try admin only
*/
const deleteDonation = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await TryDonation.findById(postId);

    if (post) {
      const deletePost = await TryDonation.deleteOne({ _id: postId });

      if (deletePost.deletedCount === 1) {
        post.images && (await deleteMultipleImage(post.images));

        res.status(200).json({
          message: "Post deletion successful",
          postId,
        });
      } else {
        res.status(400).json({
          message: "Post deletion failed",
        });
      }
    } else {
      res.status(400).json({
        message: "Post delete failed as post not found",
      });
    }
  } catch (err) {
    const error = createError(400, err.message);
    next(error);
  }
};

/*
  @api:       POST /api/try/activeDonor
  @desc:      Create a new create active donation
  @access:    private, try admin only
*/
const createActiveDonor = async (req, res, next) => {
  try {
    const { title, type } = req.body;

    const image = req?.file ? await uploadSingleImage(req.file, "try/") : null;

    const createdNewDonation = await TryActiveDonor.create({
      title,
      type,
      image,
      isActive: true,
      user: req.user.id,
    });

    res
      .status(201)
      .json({ message: "Post created successfully", post: createdNewDonation });
  } catch (err) {
    const error = createError(500, err.message);
    next(error);
  }
};

/*
  @api:       DELETE /api/try/activeDonor/:id
  @desc:      Delete a post
  @access:    private, try admin only
*/
const deleteActiveDonor = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await TryActiveDonor.findById(postId);

    if (post) {
      const deletePost = await TryActiveDonor.deleteOne({ _id: postId });

      if (deletePost.deletedCount === 1) {
        post.image && (await deleteSingleImage(post.image));

        res.status(200).json({
          message: "Post deletion successful",
          postId,
        });
      } else {
        res.status(400).json({
          message: "Post deletion failed",
        });
      }
    } else {
      res.status(400).json({
        message: "Post delete failed as post not found",
      });
    }
  } catch (err) {
    const error = createError(400, err.message);
    next(error);
  }
};

const getSpecialDonation = async (req, res, next) => {};
const getRecurringDonatio = async (req, res, next) => {};

module.exports = {
  getDonations,
  getActiveDonors,
  getDonationById,
  getSpecialDonation,
  createSpecialDonation,
  getRecurringDonatio,
  createRecurringDonation,
  createDonation,
  deleteDonation,
  updateDonationById,
  createActiveDonor,
  deleteActiveDonor,
};
