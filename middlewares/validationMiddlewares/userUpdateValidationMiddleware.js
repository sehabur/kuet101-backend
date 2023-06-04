const { body } = require('express-validator');

const userUpdateValidationMiddleware = [
  body('email').isEmail().withMessage('Invalid email'),
  body('firstName').notEmpty().withMessage('Please input First Name'),
  body('lastName').notEmpty().withMessage('Please input Last Name'),
  body('homeDistrict').notEmpty().withMessage('Please input Home District'),
  body('presentDistrict')
    .notEmpty()
    .withMessage('Please input Present District'),
  body('phoneNo').notEmpty().withMessage('Please input Phone No'),
  body('linkedinProfileUrl')
    .notEmpty()
    .withMessage('Please input Linkedin Profile'),
  body('facebookProfileUrl')
    .notEmpty()
    .withMessage('Please input Facebook Profile'),
  body('status').notEmpty().withMessage('Please input Job status'),
  body('currentOrganization')
    .notEmpty()
    .withMessage('Please input Current Organization'),
];

module.exports = {
  userUpdateValidationMiddleware,
};
