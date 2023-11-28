const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const url = require('url');
const axios = require('axios');
const User = require('../models/userModel');
const { uploadSingleImage } = require('../middlewares/fileUpload');
const { sendMailToUser } = require('../helper');

// const cheerio = require('cheerio');
// const scrapedin = require('scrapedin');
// const { LinkedInProfileScraper } = require('linkedin-profile-scraper');
// const { data } = require('../data/data.js');

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
      if (!user.isVerified) {
        const error = createError(401, 'User verification pending');
        next(error);
      }

      result = await bcrypt.compare(password, user.password);
      if (result) {
        const {
          _id,
          firstName,
          lastName,
          rollNo,
          batch,
          currentlyLiveIn,
          gender,
          bloodGroup,
          bloodDonationEnable,
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
          interests,
          expertin,
          registrationNo,
          profilePicture,
          selfReferralCode,
          isActive,
          isAdmin,
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
            currentlyLiveIn,
            gender,
            bloodGroup,
            bloodDonationEnable,
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
            interests,
            expertin,
            registrationNo,
            profilePicture,
            selfReferralCode,
            isActive,
            isAdmin,
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
      gender,
      bloodGroup,
      bloodDonationEnable,
      email,
      phoneNo,
      linkedinProfileUrl,
      facebookProfileUrl,
      password,
      status,
      currentJobTitle,
      currentOrganization,
      registrationNo,
      interests,
      expertin,
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
          gender,
          bloodGroup,
          bloodDonationEnable,
          email,
          phoneNo,
          profilePicture,
          linkedinProfileUrl,
          facebookProfileUrl,
          password: encriptPassword(password),
          status,
          currentJobTitle,
          currentOrganization,
          registrationNo,
          interests: interests?.split(',').map((item) => item.trim()),
          expertin: expertin?.split(',').map((item) => item.trim()),
          selfReferralCode,
          approvalStatus: 'pending',
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
  @api:       GET /api/users/allInterests
  @desc:      get all interests
  @access:    public
*/
const getAllInterests = async (req, res, next) => {
  try {
    const interest = await User.aggregate([
      { $project: { items: { $concatArrays: ['$interests', '$expertin'] } } },
    ]);

    let interestList = [];

    for (let item of interest) {
      item?.items?.forEach((val) => val !== '' && interestList.push(val));
    }

    const finalData = [...new Set(interestList)];

    res.status(200).json(finalData);
  } catch (error) {
    const err = createError(500, 'Error Occured');
    next(err);
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
    let currentOrgKeywords = [];

    for (key in filterOptions) {
      if (key === 'name') {
        const nameKeywords = filterOptions[key]
          .split(' ')
          .map((keyword) => new RegExp(keyword, 'i')); // split name into firstName and lastName //
        secondaryFilter.$or = [
          { firstName: { $in: nameKeywords } },
          { lastName: { $in: nameKeywords } },
        ];
      } else if (key === 'currentJobTitle') {
        const jobTitleKeywords = filterOptions[key]
          .split(' ')
          .map((keyword) => new RegExp(keyword, 'i'));
        secondaryFilter[key] = { $in: jobTitleKeywords };
      } else if (key === 'currentOrganization') {
        currentOrgKeywords = filterOptions[key].toLowerCase().split(' ');
      } else if (key === 'presentDistrict') {
        secondaryFilter[key] = { $regex: filterOptions[key], $options: 'i' };
      } else if (key === 'interests' || key === 'expertin') {
        secondaryFilter[key] = { $regex: filterOptions[key], $options: 'i' };
      } else if (key === 'bloodGroup') {
        secondaryFilter[key] = filterOptions[key];
        secondaryFilter['bloodDonationEnable'] = true;
      } else if (key === 'search') {
        // do nothing //
      } else {
        secondaryFilter[key] = filterOptions[key];
      }
    }
    // console.log(secondaryFilter);

    let users;

    if (filterOptions.currentOrganization) {
      users = await User.aggregate([
        {
          $match: {
            $expr: {
              $ne: [
                '$_id',
                {
                  $toObjectId: req.user.id,
                },
              ],
            },
            isActive: true,
            ...secondaryFilter,
          },
        },
        // {
        //   $addFields: {
        //     returnObject: {
        //       $regexFind: {
        //         input: '$currentOrganization',
        //         regex: /\(|\)|pcb/i,
        //       },
        //     },
        //   },
        // },
        // {
        //   $match: {
        //     $expr: {
        //       $gt: [{ $size: '$returnObject' }, 0],
        //     },
        //   },
        // },
        // {
        //   $project: {
        //     newName: {
        //       $replaceAll: {
        //         input: '$currentOrganization',
        //         find: '$returnObject.match',
        //         replacement: '',
        //       },
        //     },
        //   },
        // },
        // {
        //   $match: {
        //     regexResObject: {
        //     },
        //   },
        // },

        // {
        //   $addFields: {
        //     newName: {
        //       $function: {
        //         body: function (name) {
        //           return name.replace(/\(|\)/, '');
        //         },
        //         args: ['$currentOrganization'],
        //         lang: 'js',
        //       },
        //     },
        //   },
        // },
        {
          $addFields: {
            wordMatchCount: {
              $size: {
                $setIntersection: [
                  {
                    $split: [
                      {
                        $toLower: '$currentOrganization',
                      },
                      ' ',
                    ],
                  },
                  currentOrgKeywords,
                ],
              },
            },
          },
        },
        {
          $match: {
            wordMatchCount: {
              $gte: 1,
            },
          },
        },
        {
          $sort: {
            wordMatchCount: -1,
            createdAt: -1,
          },
        },
        { $limit: 100 },
      ]);
    } else {
      users = await User.find({
        _id: { $ne: req.user.id },
        isActive: true,
        ...secondaryFilter,
      })
        .select({ __v: 0, password: 0 })
        .sort({ createdAt: 'desc' })
        .limit(100);
    }

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
      rollNo,
      batch,
      departmentLong,
      departmentShort,
      homeDistrict,
      presentDistrict,
      currentlyLiveIn,
      gender,
      bloodGroup,
      bloodDonationEnable,
      email,
      phoneNo,
      linkedinProfileUrl,
      facebookProfileUrl,
      status,
      currentJobTitle,
      currentOrganization,
      registrationNo,
      interests,
      expertin,
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
          rollNo,
          batch,
          departmentLong,
          departmentShort,
          homeDistrict,
          presentDistrict,
          currentlyLiveIn,
          gender,
          bloodGroup,
          bloodDonationEnable,
          email,
          phoneNo,
          linkedinProfileUrl,
          facebookProfileUrl,
          status,
          currentJobTitle,
          currentOrganization,
          registrationNo,
          interests: interests?.split(',').map((item) => item.trim()),
          expertin: expertin?.split(',').map((item) => item.trim()),
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
        await user.updateOne({
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
        resetTokenExpiry: addMinutes(new Date(), 15), // 15 min from now //
      });

      const verificationLink = `${process.env.FRONT_END_URL}/manage-password/set-new?user=${user._id}&resetToken=${resetToken}`;

      const mailBody = `<html><body><h2>Reset your password </h2><p>Click on the below link to reset your password</p><a href=${verificationLink} target="_blank">Reset Password</a><br/><br/><p>If you face any difficulties or need any assistance please contact us at <a href="mailto:kuetianshub@gmail.com">kuetianshub@gmail.com</a></p></body></html>`;

      const mailSendResponse = await sendMailToUser(
        'kuetianshub@gmail.com',
        user.email,
        mailBody,
        'Reset your password'
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
        await user.updateOne({
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
  // console.log(axiosResponse);
  // let finalData;
  // let gotFinalData = false;
  // for (component of data?.data?.data?.identityDashProfileCardsByInitialCards
  //   ?.elements) {
  //   let gotExperienceText = false;
  //   if (gotFinalData) {
  //     break;
  //   }
  //   for (compLevel2 of component?.topComponents) {
  //     if (gotExperienceText) {
  //       // finalData =
  //       //   compLevel2?.components?.fixedListComponent?.components[0]?.components
  //       //     ?.titleV2?.text;
  //       finalData = compLevel2?.components?.fixedListComponent.components;
  //       gotFinalData = true;
  //       break;
  //     }
  //     if (
  //       compLevel2?.components?.headerComponent?.title?.text === 'Experience'
  //     ) {
  //       gotExperienceText = true;
  //       continue;
  //     }
  //   }
  // }
  // res.status(200).json(finalData);
  // res.status(200).json(
  //   data?.data?.data?.identityDashProfileCardsByInitialCards?.elements?.map(
  //     (comp) =>
  //       comp?.topComponents?.map((comp2) => {
  //         if (
  //           comp2?.components?.headerComponent?.title?.text === 'Experience'
  //         ) {
  //           return {
  //             main: comp2?.components?.headerComponent?.title?.text,
  //             sub: 'true',
  //           };
  //         } else {
  //           return {
  //             main: comp2?.components?.headerComponent?.title?.text,
  //             sub: 'false',
  //           };
  //         }
  //       })
  //   )
  // );
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

const addMinutes = (date, minutes) => {
  date.setMinutes(date.getMinutes() + minutes);
  return date;
};

// Exports //

module.exports = {
  login,
  register,
  getAllInterests,
  getFindYourMatesData,
  getUserProfileById,
  updateUserProfile,
  getUsersByQuery,
  changePassword,
  resetPasswordLink,
  setNewPassword,
  webScrapper,
};
