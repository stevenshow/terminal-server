const { json } = require("express");
const express = require("express");
const router = express.Router();
const CardController = require("../controllers/CardController");

const cardController = new CardController();

router.get("/", async (req, res) => {
  res.status(200).send(await cardController.GetHomePageCards());
});

router.get("/projects", async (req, res) => {
  res.status(200).send(await cardController.GetProjects());
});

router.get("/contact", async (req, res) => {
  res.status(200).send(await cardController.GetContacts());
});

router.get("/test", async (req, res) => {
  res.status(200).send(await cardController.GetAll());
});

module.exports = router;
