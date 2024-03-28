const createError = require("http-errors");
const { validationResult } = require("express-validator");
const url = require("url");
const {
  uploadMultipleImage,
  deleteMultipleImage,
} = require("../middlewares/fileUpload");

const TryDonation = require("../models/tryDonationModel");
const SpecialDonation = require("../models/specialDonationModel");
const RecurringDonation = require("../models/recurringDonationModel");
const TryActiveDonor = require("../models/tryActiveDonorModel");

/*
  @api:       GET /api/try/donation
  @desc:      get all donations
  @access:    private
*/
const getDonations = async (req, res, next) => {
  try {
    const donations = await TryDonation.find({
      isActive: true,
    }).sort({ createdAt: "desc" });
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
    const donations = await TryActiveDonor.find({
      isActive: true,
    }).sort({ createdAt: "desc" });
    res.status(200).json({ donations });
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    const { amount, description, category } = req.body;

    //   const newPost = new Post({
    //     title,
    //     description,
    //     category,
    //     images,
    //     user: req.user.id,
    //   });
    //   const createdNewDonation = await newPost.save();

    const createdNewDonation = await SpecialDonation.create({
      amount,
      description,
      category,
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    const { amount, description, category } = req.body;

    //   const newPost = new Post({
    //     title,
    //     description,
    //     category,
    //     images,
    //     user: req.user.id,
    //   });
    //   const createdNewDonation = await newPost.save();

    const createdNewDonation = await RecurringDonation.create({
      amount,
      description,
      category,
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

// <----------- Try admin panel -------------> //

/*
  @api:       POST /api/try/donation
  @desc:      Create a new create donation
  @access:    private, try admin only
*/
const createDonation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    const { title, description, donationDetails } = req.body;

    const images = req?.files ? await uploadMultipleImage(req.files) : null;

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
      donationDetails,
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
  @api:       DELETE /api/try/deleteDonation/:id
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    const { title, type } = req.body;

    const image = req?.file ? await uploadSingleImage(req.file) : null;

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
  @api:       DELETE /api/try/deleteDonation/:id
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

module.exports = {
  getDonations,
  getActiveDonors,
  getDonationById,
  createSpecialDonation,
  createRecurringDonation,
  createDonation,
  deleteDonation,
  createActiveDonor,
  deleteActiveDonor,
};
