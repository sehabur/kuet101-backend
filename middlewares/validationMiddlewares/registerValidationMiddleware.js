const { body } = require('express-validator');

const registerValidationMiddleware = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be atleast 6 characters'),
  body('firstName').notEmpty().withMessage('Please input First Name'),
  body('lastName').notEmpty().withMessage('Please input Last Name'),
  body('rollNo').notEmpty().withMessage('Please input Roll number'),
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
  body('status').notEmpty().withMessage('Please input status'),
  body('referral').notEmpty().withMessage('Please input Referral Code'),
];

const enrollTutorValidationMiddleware = [
  body('district').notEmpty().withMessage('Please input district'),
  body('area').notEmpty().withMessage('Please input area'),
];

const enrollToletValidationMiddleware = [
  body('district').notEmpty().withMessage('Please input district'),
  body('area').notEmpty().withMessage('Please input area'),
  body('type').notEmpty().withMessage('Please input type'),
];

module.exports = {
  registerValidationMiddleware,
  enrollTutorValidationMiddleware,
  enrollToletValidationMiddleware,
};
