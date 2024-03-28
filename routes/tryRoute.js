const express = require("express");

const router = express.Router();

const {
  getDonations,
  getActiveDonors,
  getDonationById,
  createSpecialDonation,
  createRecurringDonation,
  createDonation,
  deleteDonation,
  createActiveDonor,
  deleteActiveDonor,
} = require("../controllers/tryController");

const { checkLogin, checkTryAdmin } = require("../middlewares/authMiddleware");

const { fileUpload } = require("../middlewares/fileUpload");

router
  .route("/donation")
  .get(checkLogin, getDonations)
  .post(
    checkLogin,
    checkTryAdmin,
    fileUpload.array("image", 8),
    createDonation
  );
router
  .route("/donation/:id")
  .get(checkLogin, getDonationById)
  .delete(checkLogin, checkTryAdmin, deleteDonation);

router
  .route("/activeDonor")
  .get(checkLogin, getActiveDonors)
  .post(
    checkLogin,
    checkTryAdmin,
    fileUpload.array("image", 8),
    createActiveDonor
  );
router
  .route("/activeDonor/:id")
  .delete(checkLogin, checkTryAdmin, deleteActiveDonor);

router.route("/specialDonation").post(checkLogin, createSpecialDonation);

router.route("/recurringDonation").post(checkLogin, createRecurringDonation);

module.exports = router;
