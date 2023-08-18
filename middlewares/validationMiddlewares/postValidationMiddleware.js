const { body } = require('express-validator');

const postValidationMiddleware = [
  body('title').notEmpty().withMessage('Title field missing'),
  body('description').notEmpty().withMessage('Description field missing'),
];

module.exports = {
  postValidationMiddleware,
};
