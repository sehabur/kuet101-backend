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

const { checkLogin } = require('../middlewares/authMiddleware');

const { fileUpload } = require('../middlewares/fileUpload');

const {
  registerValidationMiddleware,
  enrollTutorValidationMiddleware,
} = require('../middlewares/validationMiddlewares/registerValidationMiddleware');

const {
  userUpdateValidationMiddleware,
} = require('../middlewares/validationMiddlewares/userUpdateValidationMiddleware');

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

router
  .route('/enrollForTutor')
  .post(checkLogin, enrollTutorValidationMiddleware, enrollForTutor);

router.route('/findTutor').get(checkLogin, findTutor);

router.route('/findTutor').get(checkLogin, findTutor);

router
  .route('/getTutionEnrollmentByUser/:id')
  .get(checkLogin, getTutionEnrollmentByUser);

router
  .route('/deleteTutionEnrollment/:id')
  .delete(checkLogin, deleteTutionEnrollment);

router.post('/changePassword', checkLogin, changePassword);
router.post('/resetPasswordLink', resetPasswordLink);
router.post('/setNewPassword', setNewPassword);

// Test routes //

router.route('/test').get((req, res) => {
  res.status(200).json({ data: 'test data successful' });
});
router.get('/webScrappingTest', webScrapper);

// Exports //
module.exports = router;
