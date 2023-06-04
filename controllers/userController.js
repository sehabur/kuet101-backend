const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const url = require('url');

const User = require('../models/userModel');
const { uploadSingleImage } = require('../middlewares/fileUpload');
const { sendMailToUser } = require('../helper');
const { urlencoded } = require('express');

/*
  @api:       POST /api/users/login/
  @desc:      user login
  @access:    public
*/
const login = async (req, res, next) => {
  // try {
  const { rollNo, password } = req.body;
  const user = await User.findOne({ rollNo });

  if (user) {
    result = await bcrypt.compare(password, user.password);
    if (result) {
      const {
        firstName,
        lastName,
        rollNo,
        batch,
        departmentLong,
        departmentShort,
        homeDistrict,
        presentDistrict,
        email,
        phoneNo,
        linkedinProfileUrl,
        facebookProfileUrl,
        status,
        currentJobTitle,
        currentOrganization,
        profilePicture,
        selfReferralCode,
        isActive,
        createdAt,
      } = user;

      res.status(200).json({
        message: 'Login attempt successful.',
        user: {
          firstName,
          lastName,
          rollNo,
          batch,
          departmentLong,
          departmentShort,
          homeDistrict,
          presentDistrict,
          email,
          phoneNo,
          linkedinProfileUrl,
          facebookProfileUrl,
          status,
          currentJobTitle,
          currentOrganization,
          profilePicture,
          selfReferralCode,
          isActive,
          createdAt,
          token: generateToken(user.id),
          isLoggedIn: true,
        },
      });
    } else {
      const error = createError(401, 'Password does not match.');
      next(error);
    }
  } else {
    const error = createError(404, 'User not found');
    next(error);
  }
  // } catch (err) {
  //   const error = createError(500, 'Login failed. Unknown Error');
  //   next(error);
  // }
};

/*
  @api:       POST /api/users/register/
  @desc:      signup for new user
  @access:    public
*/
const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    const {
      firstName,
      lastName,
      rollNo,
      batch,
      departmentLong,
      departmentShort,
      homeDistrict,
      presentDistrict,
      email,
      phoneNo,
      linkedinProfileUrl,
      facebookProfileUrl,
      password,
      status,
      currentJobTitle,
      currentOrganization,
      referral,
    } = req.body;

    const userExists = await User.findOne({ rollNo });

    if (!userExists) {
      if (
        isValidateReferralCode(
          referral,
          Number(process.env.NUM_GEN_VAR_1),
          Number(process.env.NUM_GEN_VAR_2)
        )
      ) {
        const selfReferralCode = generateReferralCode(
          100000,
          999999,
          Number(process.env.NUM_GEN_VAR_1),
          Number(process.env.NUM_GEN_VAR_2)
        );
        const profilePicture = req?.file
          ? await uploadSingleImage(req.file)
          : null;
        const newuser = await User.create({
          firstName,
          lastName,
          rollNo,
          batch,
          departmentLong,
          departmentShort,
          homeDistrict,
          presentDistrict,
          email,
          phoneNo,
          profilePicture,
          linkedinProfileUrl,
          facebookProfileUrl,
          password: encriptPassword(password),
          status,
          currentJobTitle,
          currentOrganization,
          selfReferralCode,
        });

        res.status(201).json({
          message: 'Account creation successful',
          user: newuser,
        });
      } else {
        const error = createError(400, 'Invalid referral code');
        next(error);
      }
    } else {
      const error = createError(
        400,
        'Account already exists with this roll number'
      );
      next(error);
    }
  } catch (err) {
    const error = createError(400, 'Error occured');
    next(error);
  }
};

/*
  @api:       GET /api/users/findYourMates
  @desc:      get dashboard data
  @access:    private
*/
const getFindYourMatesData = async (req, res, next) => {
  try {
    const { id, departmentShort, homeDistrict, batch } = req.user;
    const usersByDept = await User.find({
      _id: { $ne: id },
      isActive: true,
      departmentShort: departmentShort,
    })
      .select('-password -__v')
      .sort({ updatedAt: 'desc' })
      .limit(8);

    const usersByBatch = await User.find({
      _id: { $ne: id },
      isActive: true,
      batch: batch,
    })
      .select('-password -__v')
      .sort({ updatedAt: 'desc' })
      .limit(8);

    const usersByHomeDistrict = await User.find({
      _id: { $ne: id },
      isActive: true,
      homeDistrict: homeDistrict,
    })
      .select('-password -__v')
      .sort({ updatedAt: 'desc' })
      .limit(8);

    const usersByTrend = await User.find({
      _id: { $ne: id },
      isActive: true,
    })
      .select('-password -__v')
      .sort({ updatedAt: 'desc' })
      .limit(8);

    res.status(200).json({
      users: { usersByTrend, usersByDept, usersByBatch, usersByHomeDistrict },
    });
  } catch (err) {
    const error = createError(500, 'Unknown Error');
    next(error);
  }
};

/*
  @api:       GET /api/users/dashboard?userId={user}
  @desc:      get dashboard data
  @access:    private
*/
const getDashboardData = async (req, res, next) => {
  try {
    let users;
    const usersByDept = await User.find({
      _id: { $ne: req.user.id },
      isActive: true,
      departmentShort: req.user.departmentShort,
    })
      .select('-password -__v')
      .sort({ updatedAt: 'desc' }); //

    const usersByBatch = await User.find({
      _id: { $ne: req.user.id },
      isActive: true,
      batch: req.user.batch,
    })
      .select('-password -__v')
      .sort({ updatedAt: 'desc' });

    const usersByHomeDistrict = await User.find({
      _id: { $ne: req.user.id },
      isActive: true,
      homeDistrict: req.user.homeDistrict,
    })
      .select('-password -__v')
      .sort({ updatedAt: 'desc' });

    res.status(200).json({ usersByDept, usersByBatch, usersByHomeDistrict });
  } catch (err) {
    const error = createError(500, 'Unknown Error');
    next(error);
  }
};

/*
  @api:       GET /api/users/profile/:id
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
  @api:       GET /api/users/getUsersByQuery
  @desc:      get users by specific query
  @access:    private
*/
const getUsersByQuery = async (req, res, next) => {
  try {
    const filterOptions = url.parse(req.url, true).query;

    let secondaryFilter = {};

    for (key in filterOptions) {
      if (key === 'name') {
        // split name into firstName and lastName //
        const nameKeywords = filterOptions[key]
          .split(' ')
          .map((keyword) => new RegExp(keyword, 'i'));
        secondaryFilter.$or = [
          { firstName: { $in: nameKeywords } },
          { lastName: { $in: nameKeywords } },
        ];
      } else if (key === 'currentJobTitle' || key === 'currentOrganization') {
        const jobKeywords = filterOptions[key]
          .split(' ')
          .map((keyword) => new RegExp(keyword, 'i'));
        secondaryFilter[key] = { $in: jobKeywords };
      } else if (key === 'search') {
        // do nothing //
      } else {
        secondaryFilter[key] = filterOptions[key];
      }
    }
    console.log(secondaryFilter);

    const users = await User.find({
      user: { $ne: req.user.id },
      isActive: true,
      ...secondaryFilter,
    })
      .select({ __v: 0, password: 0 })
      .sort({ createdAt: 'desc' })
      .limit(40);

    if (users) {
      res.json({ users });
    } else {
      const error = createError(404, 'No Users Found');
      next(error);
    }
  } catch (e) {
    const error = createError(500, 'No Posts Found');
    next(error);
  }
};

/*
  @api:       PATCH /api/users/profile/:id
  @desc:      update user profile
  @access:    private
*/
const updateUserProfile = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    const userId = req.params.id;
    const {
      firstName,
      lastName,
      homeDistrict,
      presentDistrict,
      email,
      phoneNo,
      profilePicture,
      linkedinProfileUrl,
      facebookProfileUrl,
      status,
      currentOrganization,
    } = req.body;

    let imageData;

    if (req.file) {
      imageData = await uploadSingleImage(req.file);
    } else if (profilePicture !== 'null') {
      imageData = profilePicture;
    } else if (profilePicture === 'null') {
      imageData = null;
    }

    if (userId === req.user.id) {
      const userUpdate = await User.findByIdAndUpdate(
        userId,
        {
          firstName,
          lastName,
          homeDistrict,
          presentDistrict,
          email,
          phoneNo,
          profilePicture: imageData,
          linkedinProfileUrl,
          facebookProfileUrl,
          status,
          currentOrganization,
        },
        { new: true }
      ).select('-password -__v');

      res
        .status(201)
        .json({ message: 'User update successful', userUpdate: userUpdate });
    } else {
      const error = createError(400, 'User update failed');
      next(error);
    }
  } catch (err) {
    const error = createError(400, 'User update failed');
    next(error);
  }
};

// LATER WORKS //

/*
  @api:       POST /api/users/changePassword/
  @desc:      change Password
  @access:    private
*/
const changePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id);

    if (user) {
      result = await bcrypt.compare(oldPassword, user.password);
      if (result) {
        await User.findByIdAndUpdate(req.user.id, {
          password: encriptPassword(newPassword),
        });

        res.status(201).json({
          message: 'Password changed successful.',
        });
      } else {
        const error = createError(401, 'Old Password does not match.');
        next(error);
      }
    } else {
      const error = createError(404, 'User not found');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'Password change failed.');
    next(error);
  }
};

/*
  @api:       POST /api/users/resetPasswordLink/
  @desc:      Reset Password
  @access:    public
*/
const resetPasswordLink = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const resetToken = uuidv4();

      await User.findOneAndUpdate(user._id, {
        resetToken,
        resetTokenExpiry: new Date(new Date().getTime() + 15 * 60000),
      });

      const verificationLink = `${process.env.FRONT_END_URL_PROD}/managePassword/setNew?user=${user._id}&resetToken=${resetToken}`;

      const mailBody = `<html><body><h2>Reset your password </h2><p>Click on the below link to reset your password</p><p><a href=${verificationLink} target="_blank">Reset Password</a></p></body></html>`;

      const mailSendResponse = await sendMailToUser(
        user.email,
        mailBody,
        'BoiExchange - Reset Password'
      );

      if (mailSendResponse.messageId) {
        res.status(200).json({
          message: 'Password reset link sent successfully',
          mailTo: user.email,
        });
      } else {
        const error = createError(500, 'Password reset link sent failed.');
        next(error);
      }
    } else {
      const error = createError(500, 'User not found with this email');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'Password reset link sent failed.');
    next(error);
  }
};

/*
  @api:       POST /api/users/setNewPassword/
  @desc:      Set new Password
  @access:    public
*/
const setNewPassword = async (req, res, next) => {
  try {
    const { newPassword, userId, resetToken } = req.body;
    const user = await User.findById(userId);

    if (user) {
      if (
        user.resetToken === resetToken &&
        user.resetTokenExpiry > new Date()
      ) {
        await user.update({
          password: encriptPassword(newPassword),
          resetToken: null,
          resetTokenExpiry: null,
        });

        res.status(201).json({
          message: 'Password changed successfully',
        });
      } else {
        const error = createError(
          401,
          'Your password reset link is invalid or got expired.'
        );
        next(error);
      }
    } else {
      const error = createError(500, 'User not found.');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'Password change failed.');
    next(error);
  }
};

// Helper Functions //

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {});
};

const encriptPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};

const generateReferralCode = (min, max, numGenVar1, numGenVar2) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomInt = Math.floor(Math.random() * (max - min) + min);
  const remainder = randomInt % numGenVar1;
  const finalNumber = randomInt - remainder + numGenVar2;
  return finalNumber;
};

const isValidateReferralCode = (code, numGenVar1, numGenVar2) => {
  return (code - numGenVar2) % numGenVar1 === 0 ? true : false;
};

// Exports //

module.exports = {
  login,
  register,
  getDashboardData,
  getFindYourMatesData,
  getUserProfileById,
  updateUserProfile,
  getUsersByQuery,
  changePassword,
  resetPasswordLink,
  setNewPassword,
};
