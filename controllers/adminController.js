const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const url = require('url');
const cheerio = require('cheerio');
const axios = require('axios');
const scrapedin = require('scrapedin');
const User = require('../models/userModel');
const { uploadSingleImage } = require('../middlewares/fileUpload');
const { sendMailToUser } = require('../helper');
const { LinkedInProfileScraper } = require('linkedin-profile-scraper');

const { data } = require('../data/data.js');

/*
  @api:       POST /api/admin/getUsers?approval={pending}&active={true}
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
  @api:       POST /api/admin/getUsers?approval={pending}&active={true}
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

// Exports //

module.exports = {
  getDashboardData,
  getUsers,
  getUserProfileById,
  updateUserStatus,
  getUserProfileByRoll,
};
