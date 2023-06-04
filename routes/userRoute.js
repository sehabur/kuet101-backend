const express = require('express');

const router = express.Router();

const {
  login,
  register,
  getUserProfileById,
  updateUserProfile,
  getDashboardData,
  getFindYourMatesData,
  getUsersByQuery,
  //   changePassword,
  //   resetPasswordLink,
  //   setNewPassword,
} = require('../controllers/userController');

const { checkLogin } = require('../middlewares/authMiddleware');

const { fileUpload } = require('../middlewares/fileUpload');
const {
  registerValidationMiddleware,
} = require('../middlewares/validationMiddlewares/registerValidationMiddleware');
const {
  userUpdateValidationMiddleware,
} = require('../middlewares/validationMiddlewares/userUpdateValidationMiddleware');

router.post('/login', login);

router.get('/test', (req, res) => {
  res.status(200).json({ data: 'test data successful' });
});

router.post(
  '/register',
  fileUpload.single('profilePicture'),
  registerValidationMiddleware,
  register
);

router
  .route('/profile/:id')
  .get(checkLogin, getUserProfileById)
  .patch(
    checkLogin,
    fileUpload.single('profilePicture'),
    userUpdateValidationMiddleware,
    updateUserProfile
  );

router.route('/findYourMates').get(checkLogin, getFindYourMatesData);

router.route('/getUsersByQuery').get(checkLogin, getUsersByQuery);

// router.post('/changePassword', checkLogin, changePassword);  // LATER WORK //
// router.post('/resetPasswordLink', resetPasswordLink);
// router.post('/setNewPassword', setNewPassword);

module.exports = router;
