const { body } = require('express-validator');

const registerValidationMiddleware = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be atleast 6 characters'),
  body('firstName').notEmpty().withMessage('Please input First Name'),
  body('lastName').notEmpty().withMessage('Please input Last Name'),
  body('rollNo')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Roll no must be atleast 6 digit'),
  body('batch').notEmpty().withMessage('Please input Batch'),
  body('departmentLong').notEmpty().withMessage('Please input department'),
  body('departmentShort').notEmpty().withMessage('Please input department'),
  body('homeDistrict').notEmpty().withMessage('Please input Home District'),
  body('presentDistrict')
    .notEmpty()
    .withMessage('Please input Present District'),
  body('currentlyLiveIn')
    .notEmpty()
    .withMessage('Please input where you currently live in'),
  body('linkedinProfileUrl')
    .notEmpty()
    .withMessage('Please input Linkedin Profile'),
  body('facebookProfileUrl')
    .notEmpty()
    .withMessage('Please input Facebook Profile'),
  body('status').notEmpty().withMessage('Please input status'),
  body('referral').notEmpty().withMessage('Please input Referral Code'),
];

const enrollTutorValidationMiddleware = [
  body('district').notEmpty().withMessage('Please input district'),
  body('area').notEmpty().withMessage('Please input area'),
];

module.exports = {
  registerValidationMiddleware,
  enrollTutorValidationMiddleware,
};
