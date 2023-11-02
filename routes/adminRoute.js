const express = require('express');

const router = express.Router();

const {
  getUsers,
  getUserProfileById,
  updateUserStatus,
  getUserProfileByRoll,
  getDashboardData,
  getPosts,
  updatePostActiveStatus,
  getGalleryImages,
  updateGalleryImageActiveStatus,
} = require('../controllers/adminController');

const { checkLogin, checkAdmin } = require('../middlewares/authMiddleware');

router.get('/getDashboardData', checkLogin, checkAdmin, getDashboardData);

router.get('/getUsers', checkLogin, checkAdmin, getUsers);

router.get('/getPosts', checkLogin, checkAdmin, getPosts);

router.get('/getGalleryImages', checkLogin, checkAdmin, getGalleryImages);

router.get(
  '/getUserByRollNo/:roll',
  checkLogin,
  checkAdmin,
  getUserProfileByRoll
);

router.get('/getUserById/:id', checkLogin, checkAdmin, getUserProfileById);

router.patch('/updateUserStatus', checkLogin, checkAdmin, updateUserStatus);

router.patch(
  '/updatePostActiveStatus',
  checkLogin,
  checkAdmin,
  updatePostActiveStatus
);

router.patch(
  '/updateGalleryImageActiveStatus',
  checkLogin,
  checkAdmin,
  updateGalleryImageActiveStatus
);

module.exports = router;
