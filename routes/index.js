const express = require("express");
const router = express.Router();
const {
  createPollGetController,
  createPollPostController,
  getAllPolls,
  viewPollPostController,
  viewPollGetController,
} = require("../controller/pollController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("create");
});
router.get("/create", createPollGetController);
router.post("/create", createPollPostController);
router.get("/polls/:id", viewPollGetController);
router.post("/polls/:id", viewPollPostController);
router.get("/polls", getAllPolls);

module.exports = router;
