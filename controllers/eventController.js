const Event = require('../models/eventModel');

/*
  @api:       GET /api/users/events/getAllEvents
  @desc:      get user profile of a specific user
  @access:    private
*/
const getAllEvents = async (req, res, next) => {
  try {
    const events = await Event.find().limit(20).sort({ date: 'desc' });

    if (events) {
      res.status(200).json({ events });
    } else {
      const error = createError(404, 'Events not found');
      next(error);
    }
  } catch (err) {
    const error = createError(500, 'Unknown Error');
    next(error);
  }
};

// Exports //

module.exports = {
  getAllEvents,
};
