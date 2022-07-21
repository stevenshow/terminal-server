const express = require("express");
const router = express.Router();

router.post("/repo-push-event", (req, res) => {
  res.status(200).send("good");
});

module.exports = router;
