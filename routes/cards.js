const { json } = require("express");
const express = require("express");
const router = express.Router();
const CardController = require("../controllers/CardController");

const cardController = new CardController();

router.get("/", (req, res) => {
  res.status(200).send(cardController.GetHomePageCards());
});

router.get("/projects", (req, res) => {
  res.status(200).send(cardController.GetProjects());
});

router.get("/contact", (req, res) => {
  res.status(200).send(cardController.GetContacts());
});

router.get("/test", async (req, res) => {
  let data = await cardController.GetAll();
  console.log(data["card"]);
  res.status(200).send(data);
});

module.exports = router;
