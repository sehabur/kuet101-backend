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
/*
  @api:       POST /api/users/login/
  @desc:      user login
  @access:    public
*/
const login = async (req, res, next) => {
  try {
    const { rollNo, password } = req.body;
    const user = await User.findOne({ rollNo });

    if (user) {
      result = await bcrypt.compare(password, user.password);
      if (result) {
        const {
          _id,
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
            _id,
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
  } catch (err) {
    const error = createError(500, 'Login failed. Unknown Error');
    next(error);
  }
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
      currentlyLiveIn,
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
        const newUser = await User.create({
          firstName,
          lastName,
          rollNo,
          batch,
          departmentLong,
          departmentShort,
          homeDistrict,
          currentlyLiveIn,
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
          user: newUser,
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

    const usersByDept = await User.aggregate([
      {
        $match: {
          $expr: {
            $ne: [
              '$_id',
              {
                $toObjectId: id,
              },
            ],
          },
          isActive: true,
          departmentShort: departmentShort,
        },
      },
      {
        $project: {
          password: 0,
          __v: 0,
        },
      },
      { $sample: { size: 8 } },
    ]);

    const usersByBatch = await User.aggregate([
      {
        $match: {
          $expr: {
            $ne: [
              '$_id',
              {
                $toObjectId: id,
              },
            ],
          },
          isActive: true,
          batch: batch,
        },
      },
      {
        $project: {
          password: 0,
          __v: 0,
        },
      },
      { $sample: { size: 8 } },
    ]);

    const usersByHomeDistrict = await User.aggregate([
      {
        $match: {
          $expr: {
            $ne: [
              '$_id',
              {
                $toObjectId: id,
              },
            ],
          },
          isActive: true,
          homeDistrict: homeDistrict,
        },
      },
      {
        $project: {
          password: 0,
          __v: 0,
        },
      },
      { $sample: { size: 8 } },
    ]);

    const usersByTrend = await User.aggregate([
      {
        $match: {
          $expr: {
            $ne: [
              '$_id',
              {
                $toObjectId: id,
              },
            ],
          },
          isActive: true,
          isPopular: true,
        },
      },
      {
        $project: {
          password: 0,
          __v: 0,
        },
      },
      { $sample: { size: 8 } },
    ]);

    // const usersByDept = await User.find({
    //   _id: { $ne: id },
    //   isActive: true,
    //   departmentShort: departmentShort,
    // })
    //   .select('-password -__v')
    //   .sort({ updatedAt: 'desc' })
    //   .limit(8);

    res.status(200).json({
      users: { usersByTrend, usersByDept, usersByBatch, usersByHomeDistrict },
    });
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
        const nameKeywords = filterOptions[key]
          .split(' ')
          .map((keyword) => new RegExp(keyword, 'i')); // split name into firstName and lastName //
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

    const users = await User.find({
      _id: { $ne: req.user.id },
      isActive: true,
      ...secondaryFilter,
    })
      .select({ __v: 0, password: 0 })
      .sort({ createdAt: 'desc' })
      .limit(30);

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
          profilePicture: imageData,
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

const webScrapper = async (req, res, next) => {
  // downloading the target web page
  // by performing an HTTP GET request in Axios

  let cookie = [
    {
      domain: '.linkedin.com',
      expirationDate: 1720029011.960179,
      hostOnly: false,
      httpOnly: false,
      name: 'bcookie',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value: '"v=2&99b775ae-8481-4575-860c-3c5d3ba3c599"',
    },
    {
      domain: '.www.linkedin.com',
      expirationDate: 1720029011.611015,
      hostOnly: false,
      httpOnly: true,
      name: 'bscookie',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value:
        '"v=1&2023070417491199a9989a-d3a7-4b27-813e-b49fcb611483AQFtl0XTBIMRhy-bzkdispnb3vfnIVy_"',
    },
    {
      domain: '.linkedin.com',
      hostOnly: false,
      httpOnly: false,
      name: 'lang',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: true,
      storeId: '0',
      value: 'v=2&lang=en-us',
    },
    {
      domain: 'www.linkedin.com',
      expirationDate: 1689097752.206798,
      hostOnly: true,
      httpOnly: false,
      name: 'fid',
      path: '/',
      sameSite: 'unspecified',
      secure: false,
      session: false,
      storeId: '0',
      value:
        'AQHtt8xLAnLTtwAAAYkiBcmnOh1QnxY-0u6qsga82CTgWFTSzeVijhIbyahezkzeXLevIhIXWNTDzw',
    },
    {
      domain: '.linkedin.com',
      expirationDate: 1696269011.960113,
      hostOnly: false,
      httpOnly: false,
      name: 'li_sugr',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value: '9e4e8044-571d-4ba8-86bc-8f2864dca546',
    },
    {
      domain: 'www.linkedin.com',
      expirationDate: 1688579352,
      hostOnly: true,
      httpOnly: false,
      name: 'ln_or',
      path: '/',
      sameSite: 'unspecified',
      secure: false,
      session: false,
      storeId: '0',
      value: 'eyIzMjUyNTcyIjoiZCJ9',
    },
    {
      domain: 'www.linkedin.com',
      expirationDate: 1704044956,
      hostOnly: true,
      httpOnly: false,
      name: 'g_state',
      path: '/',
      sameSite: 'unspecified',
      secure: false,
      session: false,
      storeId: '0',
      value: '{"i_p":1688500156264,"i_l":1}',
    },
    {
      domain: 'www.linkedin.com',
      expirationDate: 1689097781.967913,
      hostOnly: true,
      httpOnly: false,
      name: 'fcookie',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value:
        'AQFhzot8HGnyeAAAAYkiBj33I15Cb04neLnBTGDQOJWH_S7oW1XnKK43VFircaHNqO8z5U3QkkS-fv246_GiGDlbMHtdnRc6DgGUHyiQMo66Na7vK65NwtlasK9Q7j2oJHrx-2n3xtLdh7Yk1gRK0Wvh-Ih_4RhrJX8atOGwAc7ca240_99iVuJ-SfF8cy0LWl-lzgbCebkmrqvXnfPICebQHPwkwGBGQXarS_6klADILN1CCbB5VuOEv1qD9eenNyKBHAAsTaEhCCOFTdb5g/Qsa0VaSc6xum22J5kgIEbRWvXuL0YDtqC3u0MdVI4a0/tPjvQAdYNkYTJky4+TKW7T12Sw==',
    },
    {
      domain: '.linkedin.com',
      hostOnly: false,
      httpOnly: false,
      name: 'AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg',
      path: '/',
      sameSite: 'unspecified',
      secure: false,
      session: true,
      storeId: '0',
      value: '1',
    },
    {
      domain: '.linkedin.com',
      expirationDate: 1704044993,
      hostOnly: false,
      httpOnly: false,
      name: 'AMCV_14215E3D5995C57C0A495C55%40AdobeOrg',
      path: '/',
      sameSite: 'unspecified',
      secure: false,
      session: false,
      storeId: '0',
      value:
        '-637568504%7CMCIDTS%7C19543%7CMCMID%7C24793322003328351760878478517573508265%7CMCAAMLH-1689097793%7C3%7CMCAAMB-1689097793%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1688500193s%7CNONE%7CvVersion%7C5.1.1',
    },
    {
      domain: '.linkedin.com',
      expirationDate: 1691084993,
      hostOnly: false,
      httpOnly: false,
      name: 'aam_uuid',
      path: '/',
      sameSite: 'unspecified',
      secure: false,
      session: false,
      storeId: '0',
      value: '24970928722555890270936701108791095138',
    },
    {
      domain: '.www.linkedin.com',
      expirationDate: 1720029004.772025,
      hostOnly: false,
      httpOnly: true,
      name: 'li_at',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value:
        'AQEDAQiclcoAMlp0AAABiSIGl1sAAAGJRhMbW1YArOTe6_c0xmxiBBDkSLP_qtB3GzdxKsmLpJlnhM_jf-tlf1BkSiA1fafAOdVthRuctPwCi3JWfINKYC20vGnZR9V5OEQWqZUykCfEQS7TgB80EPh3',
    },
    {
      domain: '.linkedin.com',
      expirationDate: 1696269004.772075,
      hostOnly: false,
      httpOnly: false,
      name: 'liap',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value: 'true',
    },
    {
      domain: '.www.linkedin.com',
      expirationDate: 1696269004.772132,
      hostOnly: false,
      httpOnly: false,
      name: 'JSESSIONID',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value: '"ajax:4777502983199659639"',
    },
    {
      domain: '.www.linkedin.com',
      expirationDate: 1689702607,
      hostOnly: false,
      httpOnly: false,
      name: 'timezone',
      path: '/',
      sameSite: 'unspecified',
      secure: true,
      session: false,
      storeId: '0',
      value: 'Asia/Dhaka',
    },
    {
      domain: '.www.linkedin.com',
      expirationDate: 1704045007,
      hostOnly: false,
      httpOnly: false,
      name: 'li_theme',
      path: '/',
      sameSite: 'unspecified',
      secure: true,
      session: false,
      storeId: '0',
      value: 'light',
    },
    {
      domain: '.www.linkedin.com',
      expirationDate: 1704045007,
      hostOnly: false,
      httpOnly: false,
      name: 'li_theme_set',
      path: '/',
      sameSite: 'unspecified',
      secure: true,
      session: false,
      storeId: '0',
      value: 'app',
    },
    {
      domain: '.linkedin.com',
      expirationDate: 1691085010.673248,
      hostOnly: false,
      httpOnly: false,
      name: 'UserMatchHistory',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value:
        'AQKulMKDIR1X1wAAAYkiBqewb7l1YZ42iuk3uOy1Eb5zQ_K0IOusXYzusUmyOI_HLov_EGnzBDShrOhHMKiOKtzP-jd20hG8zBMrRNzLZKDTFym6EuZrEB5keJotajuCS9IG1zaSKYrq4gbTyXTNdhh9h5HrvbG_xfzBrTe7NXbQHzQmBkorhfOKn6eDjtUGvlmB-Diy3WV5fre8Cd6NjU458uaPDg3g63wkds8A-doxw1xYc7nkfcLySfrimUWCcKXX7unEvuWs1Ox7FDGjKC_JZyxGJP-6oy2Bd76dPOn4n_nL5nlSn29-XCzXi2vfh03kLCGzrQ862MRDKRQ9URTUHono8ic',
    },
    {
      domain: '.linkedin.com',
      expirationDate: 1691085010.673269,
      hostOnly: false,
      httpOnly: false,
      name: 'AnalyticsSyncHistory',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value:
        'AQIONtxO7TtfQQAAAYkiBqewKYm8UIwhgX6ryUM2r5FZ6SmQj2gCgnmkgL8dJbwkFO9iGWSeRGJxyM_Ea2dL4Q',
    },
    {
      domain: '.linkedin.com',
      expirationDate: 1696269010.694543,
      hostOnly: false,
      httpOnly: false,
      name: '_guid',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value: '962f7ad2-36ac-4cf0-93c4-3dd04c605d05',
    },
    {
      domain: '.linkedin.com',
      expirationDate: 1691085011.610937,
      hostOnly: false,
      httpOnly: false,
      name: 'lms_ads',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value:
        'AQF8Hk61Ib6DCgAAAYkiBq_YKeTybOJqLxkhk0WnwHmvDsQSHMTTLurMHh5GawRltGYNHY-JO6by4BjPg2KdBdSVOYcEnpNm',
    },
    {
      domain: '.linkedin.com',
      expirationDate: 1691085011.610981,
      hostOnly: false,
      httpOnly: false,
      name: 'lms_analytics',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value:
        'AQF8Hk61Ib6DCgAAAYkiBq_YKeTybOJqLxkhk0WnwHmvDsQSHMTTLurMHh5GawRltGYNHY-JO6by4BjPg2KdBdSVOYcEnpNm',
    },
    {
      domain: '.linkedin.com',
      expirationDate: 1688494152.461004,
      hostOnly: false,
      httpOnly: false,
      name: 'lidc',
      path: '/',
      sameSite: 'no_restriction',
      secure: true,
      session: false,
      storeId: '0',
      value:
        '"b=OB90:s=O:r=O:a=O:p=O:g=3064:u=285:x=1:i=1688493041:t=1688494152:v=2:sig=AQG4ElXsM85fVv51REjJtkfJIH4rZaLu"',
    },
  ];

  // const scraper = new LinkedInProfileScraper({
  //   sessionCookieValue:
  //     'AQEDAQiclcoD2ObRAAABiSIrUu0AAAGJRjfW7U0AwnwuvfV_vgbJC8B69CJTZy9eCdWPGRzZwOZ3YXf1Xm-c9IFvDCvxdBhmwNT6lFLtBNXMeUDP5Xo7Qqdm-bNA2JhaQHxsr2XPDpBkcrI6W4hjtZrs',
  //   keepAlive: false,
  // });

  // Prepare the scraper
  // Loading it in memory
  // await scraper.setup();

  // const result = await scraper.run(
  //   'https://www.linkedin.com/in/swarna-chakraborty-04b5481b8/'
  // );

  // console.log(result);

  // const options = {
  //   email: 'sehabur@gmail.com',
  //   password: 'Kueteee42$',
  // };
  // const profileScraper = await scrapedin(options);
  // console.log(profileScraper);

  // const profile = await profileScraper('https://www.linkedin.com/in/mzahidur/');

  const axiosResponse = await axios.request({
    method: 'GET',
    url2: 'https://www.linkedin.com/voyager/api/identity/dash/profiles?q=memberIdentity&memberIdentity=adnan-sharif&decorationId=com.linkedin.voyager.dash.deco.identity.profile.TopCardSupplementary-129',

    url: 'https://www.linkedin.com/in/isratjahan01/',

    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      Cookie:
        'bcookie="v=2&99b775ae-8481-4575-860c-3c5d3ba3c599"; bscookie="v=1&2023070417491199a9989a-d3a7-4b27-813e-b49fcb611483AQFtl0XTBIMRhy-bzkdispnb3vfnIVy_"; lang=v=2&lang=en-us; fid=AQHtt8xLAnLTtwAAAYkiBcmnOh1QnxY-0u6qsga82CTgWFTSzeVijhIbyahezkzeXLevIhIXWNTDzw; li_sugr=9e4e8044-571d-4ba8-86bc-8f2864dca546; ln_or=eyIzMjUyNTcyIjoiZCJ9; g_state={"i_p":1688500156264,"i_l":1}; fcookie=AQFhzot8HGnyeAAAAYkiBj33I15Cb04neLnBTGDQOJWH_S7oW1XnKK43VFircaHNqO8z5U3QkkS-fv246_GiGDlbMHtdnRc6DgGUHyiQMo66Na7vK65NwtlasK9Q7j2oJHrx-2n3xtLdh7Yk1gRK0Wvh-Ih_4RhrJX8atOGwAc7ca240_99iVuJ-SfF8cy0LWl-lzgbCebkmrqvXnfPICebQHPwkwGBGQXarS_6klADILN1CCbB5VuOEv1qD9eenNyKBHAAsTaEhCCOFTdb5g/Qsa0VaSc6xum22J5kgIEbRWvXuL0YDtqC3u0MdVI4a0/tPjvQAdYNkYTJky4+TKW7T12Sw==; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; aam_uuid=24970928722555890270936701108791095138; li_at=AQEDAQiclcoAMlp0AAABiSIGl1sAAAGJRhMbW1YArOTe6_c0xmxiBBDkSLP_qtB3GzdxKsmLpJlnhM_jf-tlf1BkSiA1fafAOdVthRuctPwCi3JWfINKYC20vGnZR9V5OEQWqZUykCfEQS7TgB80EPh3; liap=true; JSESSIONID="ajax:4777502983199659639"; timezone=Asia/Dhaka; li_theme=light; li_theme_set=app; AnalyticsSyncHistory=AQIONtxO7TtfQQAAAYkiBqewKYm8UIwhgX6ryUM2r5FZ6SmQj2gCgnmkgL8dJbwkFO9iGWSeRGJxyM_Ea2dL4Q; _guid=962f7ad2-36ac-4cf0-93c4-3dd04c605d05; lms_ads=AQF8Hk61Ib6DCgAAAYkiBq_YKeTybOJqLxkhk0WnwHmvDsQSHMTTLurMHh5GawRltGYNHY-JO6by4BjPg2KdBdSVOYcEnpNm; lms_analytics=AQF8Hk61Ib6DCgAAAYkiBq_YKeTybOJqLxkhk0WnwHmvDsQSHMTTLurMHh5GawRltGYNHY-JO6by4BjPg2KdBdSVOYcEnpNm; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19543%7CMCMID%7C24793322003328351760878478517573508265%7CMCAAMLH-1689098989%7C3%7CMCAAMB-1689098989%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1688501389s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C214272570; UserMatchHistory=AQJKEYxI6BC88wAAAYkiOt1JQYBQj5SYnv271_S89HbHSZYbVpetDWy_gP3vlOvyPEcqY009R_0svbZxk1oOMfFOM8F8FEF7koG0C0xJGJM7pZ9bXLmTtFlZYhBqnwNKakMG9WLEsTcSh9J_LBg4ZNtijxmu2dGT1awfr97Q8N3nGas9XMIv0wYg08spBPBUvI-vX6u08GQGIKVN2RdRLw6Jv8V2IqUWAiYXFXW7dzvltgIDn7QCATOLriZZpqkpux98PTrmlMOIIjN9p8tM7lop7opMMlW7g1FiBCyaQtO4rj3d_DrqN4Df9TZHZfIjV6BFt5zITpFkiUGXCu3g14dpuy2mTXw; lidc="b=OB90:s=O:r=O:a=O:p=O:g=3064:u=285:x=1:i=1688496431:t=1688580581:v=2:sig=AQFiGBx-4iPYhi-IsZCxIrVvEOf_XTiO',

      'Csrf-Token': 'ajax:4777502983199659639',
    },
  });

  console.log(axiosResponse);
  res.status(200).json({ data: axiosResponse.data });
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
  getFindYourMatesData,
  getUserProfileById,
  updateUserProfile,
  getUsersByQuery,
  changePassword,
  resetPasswordLink,
  setNewPassword,
  webScrapper,
};
