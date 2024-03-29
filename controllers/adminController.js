const createError = require("http-errors");
const { validationResult } = require("express-validator");
const url = require("url");
const User = require("../models/userModel");
const Post = require("../models/postModel");
const GalleryImage = require("../models/galleryImageModel");
const { sendMailToUser, sendMailToUserTryAccount } = require("../helper");
const Tutor = require("../models/tutorModel");

/*
  @api:       GET /api/admin/getUsers?approval={pending}&active={true}
  @desc:      user login
  @access:    public
*/
const getDashboardData = async (req, res, next) => {
  // try {
  const users = await User.aggregate([
    {
      $facet: {
        department: [
          {
            $group: {
              _id: "$departmentShort",
              count: { $sum: 1 },
            },
          },
          {
            $sort: {
              count: -1,
            },
          },
        ],
        batch: [
          {
            $group: {
              _id: "$batch",
              count: { $sum: 1 },
            },
          },
          {
            $sort: {
              _id: 1,
            },
          },
        ],
        activeStatus: [
          {
            $group: {
              _id: "$isActive",
              count: { $sum: 1 },
            },
          },
        ],
        approvalStatus: [
          {
            $group: {
              _id: "$approvalStatus",
              count: { $sum: 1 },
            },
          },
        ],
        total: [
          {
            $group: {
              _id: null,
              count: { $sum: 1 },
            },
          },
        ],
      },
    },
  ]);

  const posts = await Post.aggregate([
    {
      $group: {
        _id: { $toString: "$isActive" },
        count: { $sum: 1 },
      },
    },
  ]);
  const tution = await Tutor.aggregate([
    {
      $group: {
        _id: { $toString: "$isActive" },
        count: { $sum: 1 },
      },
    },
  ]);
  const gallery = await GalleryImage.aggregate([
    {
      $group: {
        _id: { $toString: "$isActive" },
        count: { $sum: 1 },
      },
    },
  ]);

  if (users) {
    res.status(200).json({ users, posts, tution, gallery });
  } else {
    const error = createError(404, "Users not found");
    next(error);
  }
  // } catch (err) {
  //   const error = createError(500, 'Unknown Error');
  //   next(error);
  // }
};

/*
  @api:       GET /api/admin/getUsers?approval={pending}&active={true}
  @desc:      user login
  @access:    public
*/
const getUsers = async (req, res, next) => {
  try {
    const { approval, active } = url.parse(req.url, true).query;

    let query = {};

    if (approval) query.approvalStatus = approval;
    if (active) query.isActive = active;

    const users = await User.find(query)
      .select("firstName lastName rollNo isActive approvalStatus createdAt")
      .sort({ createdAt: "desc" });

    if (users) {
      res.status(200).json({ users });
    } else {
      const error = createError(404, "Users not found");
      next(error);
    }
  } catch (err) {
    const error = createError(500, "Unknown Error");
    next(error);
  }
};

/*
  @api:       GET /api/admin/getUserById/:id
  @desc:      get user profile of a specific user
  @access:    private
*/
const getUserProfileById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("-password -__v");

    if (user) {
      res.status(200).json({ user });
    } else {
      const error = createError(404, "User not found");
      next(error);
    }
  } catch (err) {
    const error = createError(500, "Unknown Error");
    next(error);
  }
};

/*
  @api:       GET /api/admin/getUserByRollNo/:roll
  @desc:      get user profile of a specific user
  @access:    private
*/
const getUserProfileByRoll = async (req, res, next) => {
  try {
    const rollNo = req.params.roll;
    const user = await User.findOne({ rollNo }).select("-password -__v");

    if (user) {
      res.status(200).json({ user });
    } else {
      const error = createError(404, "User not found");
      next(error);
    }
  } catch (err) {
    const error = createError(500, "Unknown Error");
    next(error);
  }
};

/*
  @api:       PATCH /api/admin/updateUserStatus
  @desc:      update user profile
  @access:    private
*/
const updateUserStatus = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    const { userId, approvalStatus, isActive, userEmail, userName } = req.body;

    const userUpdate = await User.findByIdAndUpdate(
      userId,
      {
        approvalStatus,
        isActive,
        isVerified: approvalStatus === "approved" ? true : false,
      },
      { new: true }
    ).select("-password -__v");

    if (approvalStatus === "approved") {
      const mailBody = `<html><body><h3>Hello ${userName},</h3><h2>Welcome to Kuetianshub</h2><p><h3>We have verified your account. Please <a href=${process.env.FRONT_END_URL}/signin target="_blank">login</a> now.</h3></p><br/><p><h4>If you have any query or need any assistance please contact us at <a href="mailto:kuetianshub@gmail.com">kuetianshub@gmail.com</a></h4></p></body></html>`;

      const mailSendResponse = await sendMailToUser(
        "kuetianshub@gmail.com",
        userEmail,
        mailBody,
        "Your account is now verified"
      );
    }

    res
      .status(201)
      .json({ message: "User update successful", userUpdate: userUpdate });
  } catch (err) {
    const error = createError(500, "User update failed");
    next(error);
  }
};

/*
  @api:       GET /api/admin/getPosts?active={true}
  @desc:      user login
  @access:    public
*/
const getPosts = async (req, res, next) => {
  try {
    const { active } = url.parse(req.url, true).query;

    let query = {};

    if (active) query.isActive = active;

    const posts = await Post.find(query).sort({ createdAt: "desc" }).populate({
      path: "user",
      select: "firstName lastName rollNo",
    });

    if (posts) {
      res.status(200).json({ posts });
    } else {
      const error = createError(404, "Post not found");
      next(error);
    }
  } catch (err) {
    const error = createError(500, "Unknown Error");
    next(error);
  }
};

/*
  @api:       PATCH /api/admin/updatePostActiveStatus
  @desc:      update Post active status
  @access:    private
*/
const updatePostActiveStatus = async (req, res, next) => {
  try {
    const { postId, isActive, sendMailSelection, mailReceivers, mailSubject } =
      req.body;

    const postActiveStatusUpdated = await Post.findByIdAndUpdate(
      postId,
      {
        isActive,
      },
      { new: true }
    ).select("-__v");

    let users = null;

    if (sendMailSelection) {
      users = await User.find(mailReceivers).select(
        "firstName lastName departmentShort email"
      );

      res.status(201).json({
        message: `Post status update successful. Email sent to ${
          users ? users.length : 0
        } users`,
        postActiveStatusUpdated,
      });

      if (users.length > 0) {
        users.push(
          {
            firstName: "Sehabur",
            lastName: "Rahman",
            email: "sehabur@gmail.com",
          },
          {
            firstName: "Saikat",
            lastName: "Das",
            email: "saikatdasnirob@gmail.com",
          }
        );

        for (let user of users) {
          const mailBody = `<html><body><h4>Hi ${user.firstName} ${user.lastName}!</h4><h3><a href="https://www.kuetianshub.com/posts/${postActiveStatusUpdated._id}">${postActiveStatusUpdated.title}</a></h3><p>${postActiveStatusUpdated.description}</p><br/><h4><a href="https://www.kuetianshub.com/posts/${postActiveStatusUpdated._id}">Go to this post</a></h4><h4><a href="https://www.kuetianshub.com">Visit Kuetianshub</a></h4><br/><p>If you face any difficulties or need any assistance please contact us at <a href="mailto:kuetianshub@gmail.com">kuetianshub@gmail.com</a></p></body></html>`;

          if (["superAdmin", "editor"].includes(req.user.adminRole)) {
            await sendMailToUser(user.email, mailBody, mailSubject);
          } else if (req.user.adminRole === "try") {
            await sendMailToUserTryAccount(user.email, mailBody, mailSubject);
          }
        }
      }
    } else {
      res.status(201).json({
        message: `Post status update successful. No email sent`,
        postActiveStatusUpdated,
      });
    }
  } catch (err) {
    const error = createError(500, "Post active status update failed");
    next(error);
  }
};

/*
  @api:       GET /api/admin/getGalleryImages?active={true}
  @desc:      user login
  @access:    public
*/
const getGalleryImages = async (req, res, next) => {
  try {
    const { active } = url.parse(req.url, true).query;

    let query = {};

    if (active) query.isActive = active;

    const galleryImage = await GalleryImage.find(query)
      .sort({ createdAt: "desc" })
      .populate({
        path: "uploadedBy",
        select: "firstName lastName rollNo",
      });

    if (galleryImage) {
      res.status(200).json({ galleryImage });
    } else {
      const error = createError(404, "Image not found");
      next(error);
    }
  } catch (err) {
    const error = createError(500, "Unknown Error");
    next(error);
  }
};

/*
  @api:       PATCH /api/admin/updateGalleryImageActiveStatus
  @desc:      update Post active status
  @access:    private
*/
const updateGalleryImageActiveStatus = async (req, res, next) => {
  try {
    const { imageId, isActive } = req.body;

    const galleryImageActiveStatusUpdate = await GalleryImage.findByIdAndUpdate(
      imageId,
      {
        isActive,
      },
      { new: true }
    ).select("-__v");

    res.status(201).json({
      message: "Gallery Image active status update successful",
      galleryImageActiveStatusUpdate,
    });
  } catch (err) {
    const error = createError(500, "Gallery Image active status update failed");
    next(error);
  }
};

// Exports //
module.exports = {
  getDashboardData,
  getUsers,
  getUserProfileById,
  updateUserStatus,
  getUserProfileByRoll,
  getPosts,
  updatePostActiveStatus,
  getGalleryImages,
  updateGalleryImageActiveStatus,
};
