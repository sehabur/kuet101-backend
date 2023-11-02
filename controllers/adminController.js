const createError = require('http-errors');
const { validationResult } = require('express-validator');
const url = require('url');
const User = require('../models/userModel');
const Post = require('../models/postModel');
const GalleryImage = require('../models/galleryImageModel');

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
              _id: '$departmentShort',
              count: { $sum: 1 },
            },
          },
          {
            $sort: {
              count: -1,
            },
          },
        ],
        activeStatus: [
          {
            $group: {
              _id: '$isActive',
              count: { $sum: 1 },
            },
          },
        ],
        approvalStatus: [
          {
            $group: {
              _id: '$approvalStatus',
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

  if (users) {
    res.status(200).json({ users });
  } else {
    const error = createError(404, 'Users not found');
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

    console.log(query);
    const users = await User.find(query)
      .select('firstName lastName rollNo isActive approvalStatus')
      .sort({ createdAt: 'desc' });

    if (users) {
      res.status(200).json({ users });
    } else {
      const error = createError(404, 'Users not found');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'Unknown Error');
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
    const user = await User.findById(userId).select('-password -__v');

    if (user) {
      res.status(200).json({ user });
    } else {
      const error = createError(404, 'User not found');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'Unknown Error');
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
    const user = await User.findOne({ rollNo }).select('-password -__v');

    if (user) {
      res.status(200).json({ user });
    } else {
      const error = createError(404, 'User not found');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'Unknown Error');
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
    const { userId, approvalStatus, isActive } = req.body;

    const userUpdate = await User.findByIdAndUpdate(
      userId,
      {
        approvalStatus,
        isActive,
        isVerified: approvalStatus === 'approved' ? true : false,
      },
      { new: true }
    ).select('-password -__v');

    res
      .status(201)
      .json({ message: 'User update successful', userUpdate: userUpdate });
  } catch (err) {
    const error = createError(500, 'User update failed');
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

    const posts = await Post.find(query).sort({ createdAt: 'desc' }).populate({
      path: 'user',
      select: 'firstName lastName rollNo',
    });

    if (posts) {
      res.status(200).json({ posts });
    } else {
      const error = createError(404, 'Post not found');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'Unknown Error');
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
    const { postId, isActive } = req.body;

    const postActiveStatusUpdate = await Post.findByIdAndUpdate(
      postId,
      {
        isActive,
      },
      { new: true }
    ).select('-__v');

    res.status(201).json({
      message: 'Post active status update successful',
      postActiveStatusUpdate,
    });
  } catch (err) {
    const error = createError(500, 'Post active status update failed');
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
      .sort({ createdAt: 'desc' })
      .populate({
        path: 'uploadedBy',
        select: 'firstName lastName rollNo',
      });

    if (galleryImage) {
      res.status(200).json({ galleryImage });
    } else {
      const error = createError(404, 'Image not found');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'Unknown Error');
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
    ).select('-__v');

    res.status(201).json({
      message: 'Gallery Image active status update successful',
      galleryImageActiveStatusUpdate,
    });
  } catch (err) {
    const error = createError(500, 'Gallery Image active status update failed');
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
