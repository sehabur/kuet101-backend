const express = require('express');

const router = express.Router();

const {
  login,
  register,
  getAllInterests,
  getUserProfileById,
  updateUserProfile,
  getFindYourMatesData,
  getUsersByQuery,
  getEmailList,
  webScrapper,
  changePassword,
  resetPasswordLink,
  setNewPassword,
} = require('../controllers/userController');

const {
  enrollForTutor,
  findTutor,
  getTutionEnrollmentByUser,
  deleteTutionEnrollment,
} = require('../controllers/tutorController');

const {
  enrollForTolet,
  findTolet,
  getToletEnrollmentByUser,
  deleteToletEnrollment,
} = require('../controllers/toletController');

const { checkLogin } = require('../middlewares/authMiddleware');

const { fileUpload } = require('../middlewares/fileUpload');

const {
  registerValidationMiddleware,
  enrollTutorValidationMiddleware,
  enrollToletValidationMiddleware
} = require('../middlewares/validationMiddlewares/registerValidationMiddleware');

const {
  userUpdateValidationMiddleware,
} = require('../middlewares/validationMiddlewares/userUpdateValidationMiddleware');

// User route //
router.post('/login', login);
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
router.route('/getAllInterests').get(getAllInterests);
router.route('/findYourMates').get(checkLogin, getFindYourMatesData);
router.route('/getUsersByQuery').get(checkLogin, getUsersByQuery);
router.route('/getEmailList').get(checkLogin, getEmailList);
router.post('/changePassword', checkLogin, changePassword);
router.post('/resetPasswordLink', resetPasswordLink);
router.post('/setNewPassword', setNewPassword);

// Tutor route //
router
  .route('/enrollForTutor')
  .post(checkLogin, enrollTutorValidationMiddleware, enrollForTutor);
router.route('/findTutor').get(checkLogin, findTutor);
router
  .route('/getTutionEnrollmentByUser/:id')
  .get(checkLogin, getTutionEnrollmentByUser);
router
  .route('/deleteTutionEnrollment/:id')
  .delete(checkLogin, deleteTutionEnrollment);

// To-let route //
router
  .route('/enrollForTolet')
  .post(checkLogin, enrollToletValidationMiddleware, enrollForTolet);
router.route('/findTolet').get(checkLogin, findTolet);
router
  .route('/getToletEnrollmentByUser/:id')
  .get(checkLogin, getToletEnrollmentByUser);
router
  .route('/deleteToletEnrollment/:id')
  .delete(checkLogin, deleteToletEnrollment);

// Test routes //
router.route('/test').get((req, res) => {
  res.status(200).json({ data: 'test data successful' });
});
router.get('/webScrappingTest', webScrapper);

// Exports //
module.exports = router;
