const express = require('express');

const router = express.Router();

const {
  getUsers,
  getUserProfileById,
  updateUserStatus,
  getUserProfileByRoll,
  getDashboardData,
} = require('../controllers/adminController');

const { checkLogin, checkAdmin } = require('../middlewares/authMiddleware');

router.get('/getDashboardData', checkLogin, checkAdmin, getDashboardData);

router.get('/getUsers', checkLogin, checkAdmin, getUsers);

router.get(
  '/getUserByRollNo/:roll',
  checkLogin,
  checkAdmin,
  getUserProfileByRoll
);

router.get('/getUserById/:id', checkLogin, checkAdmin, getUserProfileById);

router.patch('/updateUserStatus', checkLogin, checkAdmin, updateUserStatus);

module.exports = router;
