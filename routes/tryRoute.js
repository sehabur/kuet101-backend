const express = require("express");

const router = express.Router();

const {
  getDonations,
  getActiveDonors,
  getDonationById,
  createSpecialDonation,
  createRecurringDonation,
  createDonation,
  updateDonationById,
  deleteDonation,
  createActiveDonor,
  deleteActiveDonor,
  getSpecialDonation,
  getRecurringDonation,
} = require("../controllers/tryController");
const { sendMailToUserTryAccount } = require("../helper");

const { checkLogin, checkTryAdmin } = require("../middlewares/authMiddleware");

const { fileUpload } = require("../middlewares/fileUpload");

router
  .route("/donation")
  .get(checkLogin, getDonations)
  .post(checkLogin, checkTryAdmin, fileUpload.array("image", 8), createDonation)
  .patch(checkLogin, checkTryAdmin, updateDonationById);
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
    fileUpload.single("image"),
    createActiveDonor
  );
router
  .route("/activeDonor/:id")
  .delete(checkLogin, checkTryAdmin, deleteActiveDonor);

router
  .route("/specialDonation")
  .get(checkLogin, checkTryAdmin, getSpecialDonation)
  .post(checkLogin, createSpecialDonation);

router
  .route("/recurringDonation")
  .get(checkLogin, checkTryAdmin, getRecurringDonation)
  .post(checkLogin, createRecurringDonation);

// router.route("/test").get(async (req, res) => {
//   const a = await sendMailToUserTryAccount(
//     "sehabur@gmail.com",
//     "<h1>test test</h1>",
//     "Test"
//   );
//   console.log(a);
//   res.send("success");
// });

module.exports = router;
