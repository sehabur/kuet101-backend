const { body } = require('express-validator');

const galleryImageValidationMiddleware = [
  body('title').notEmpty().withMessage('Title field missing'),
  body('batch').notEmpty().withMessage('Batch field missing'),
  body('department').notEmpty().withMessage('Department field missing'),
];

module.exports = {
  galleryImageValidationMiddleware,
};
