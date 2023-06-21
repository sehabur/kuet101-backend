const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const url = require('url');

const User = require('../models/userModel');
const { uploadSingleImage } = require('../middlewares/fileUpload');
const { sendMailToUser } = require('../helper');
const { urlencoded } = require('express');
const Tutor = require('../models/tutorModel');

/*
  @api:       POST /api/users/enrollForTutor
  @desc:      Enroll to be a tutor
  @access:    private
*/
const enrollForTutor = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    const { district, area } = req.body;

    await Tutor.create({
      district,
      area,
      userProfile: req.user.id,
    });

    res.status(201).json({
      message: 'Enroll for tution successful',
    });
  } catch (err) {
    const error = createError(400, 'Error occured');
    next(error);
  }
};

/*
  @api:       GET /api/users/findTutor
  @desc:      Find a tutor
  @access:    private
*/
const findTutor = async (req, res, next) => {
  try {
    const tutors = await Tutor.find({
      isActive: true,
    })
      .select('-__v')
      .populate({
        path: 'userProfile',
        select: '-password -__v',
        options: { sort: { createdAt: 'desc' } },
      })
      .sort({ updatedAt: 'desc' })
      .limit(8);

    if (tutors) {
      res.json({ tutors });
    } else {
      const error = createError(404, 'No Tutors Found');
      next(error);
    }
  } catch (err) {
    const error = createError(400, 'Error occured');
    next(error);
  }
};

// Exports //

module.exports = {
  enrollForTutor,
  findTutor,
};
