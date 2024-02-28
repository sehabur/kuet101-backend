const createError = require("http-errors");
const { validationResult } = require("express-validator");
const url = require("url");
const Tolet = require("../models/toletModel");

/*
  @api:       POST /api/users/enrollForTolet
  @desc:      Enroll to be a tutor
  @access:    private
*/
const enrollForTolet = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    const { district, area, type, description } = req.body;

    await Tolet.create({
      district,
      area,
      type,
      description,
      userProfile: req.user.id,
    });

    res.status(201).json({
      message: "Enroll for tolet successful",
    });
  } catch (err) {
    const error = createError(400, "Error occured");
    next(error);
  }
};

/*
  @api:       GET /api/users/findTolet?district={district}&type={family}
  @desc:      Find a tutor
  @access:    private
*/
const findTolet = async (req, res, next) => {
  try {
    const { district, type } = url.parse(req.url, true).query;

    const districtValue = district === "all" ? { $ne: " " } : district;
    const typeValue = type === "all" ? { $ne: " " } : type;

    const tolets = await Tolet.find({
      userProfile: { $ne: req.user.id },
      district: districtValue,
      type: typeValue,
      isActive: true,
    })
      .select("-__v")
      .populate({
        path: "userProfile",
        select: "-password -__v",
      })
      .sort({ createdAt: "desc" })
      .limit(40);

    if (tolets) {
      res.json({ tolets });
    } else {
      const error = createError(404, "No Tolets Found");
      next(error);
    }
  } catch (err) {
    const error = createError(400, "Error occured");
    next(error);
  }
};

/*
  @api:       GET /api/users/getTutionEnrollmentByUser/:id
  @desc:      Find a tutor
  @access:    private
*/
const getToletEnrollmentByUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const tolets = await Tolet.find({
      userProfile: userId,
      isActive: true,
    })
      .select("-__v")
      .populate({
        path: "userProfile",
        select: "-password -__v",
      })
      .sort({ createdAt: "desc" })
      .limit(20);

    if (tolets) {
      res.json({ tolets });
    } else {
      const error = createError(404, "No Tolets Found");
      next(error);
    }
  } catch (err) {
    const error = createError(400, "Error occured");
    next(error);
  }
};

/*
  @api:       DELETE /api/users/deleteTutionEnrollment/:id
  @desc:      Delete a post
  @access:    private
*/
const deleteToletEnrollment = async (req, res, next) => {
  try {
    const requestId = req.params.id;

    const deleteRequest = await Tolet.deleteOne({ _id: requestId });

    if (deleteRequest.deletedCount === 1) {
      res.status(200).json({
        message: "Request deletion successful",
        requestId,
      });
    } else {
      res.status(400).json({
        message: "Request deletion failed",
      });
    }
  } catch (err) {
    const error = createError(400, err.message);
    next(error);
  }
};

// Exports //
module.exports = {
  enrollForTolet,
  findTolet,
  getToletEnrollmentByUser,
  deleteToletEnrollment,
};
