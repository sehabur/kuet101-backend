const { body } = require('express-validator');

const userUpdateValidationMiddleware = [
  body('email').isEmail().withMessage('Invalid email'),
  body('firstName').notEmpty().withMessage('Please input First Name'),
  body('lastName').notEmpty().withMessage('Please input Last Name'),
  body('batch').notEmpty().withMessage('Please input Batch'),
  body('departmentLong').notEmpty().withMessage('Please input department'),
  body('homeDistrict').notEmpty().withMessage('Please input Home District'),
  body('presentDistrict')
    .notEmpty()
    .withMessage('Please input Present District'),
  body('status').notEmpty().withMessage('Please input status'),
];

module.exports = {
  userUpdateValidationMiddleware,
};
