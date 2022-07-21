const express = require("express");
const router = express.Router();
const DeployController = require("../controllers/DeployController");

const deployController = new DeployController();

router.post("/repo-push-event", (req, res) => {
  deployController.GitPull();
  res.status(200).send();
});

module.exports = router;
