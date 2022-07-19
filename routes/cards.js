const express = require("express");
const router = express.Router();
const CardController = require("../controllers/CardController");

const cardController = new CardController();

router.get("/", (req, res) => {
  res.status(200).send(cardController.GetHomePageCards());
});

module.exports = router;
