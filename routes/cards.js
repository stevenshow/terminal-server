const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.status(200).send("respond with cards");
});

module.exports = router;
