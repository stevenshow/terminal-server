const express = require("express");
const router = express.Router();

router.post("/repo-push-event", (req, res) => {
  res.status(200).send("good one");
});

module.exports = router;
