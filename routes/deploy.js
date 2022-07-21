const express = require("express");
const router = express.Router();
const DeployController = require("../controllers/DeployController");

const deployController = new DeployController();

router.post("/repo-push-event", (req, res) => {
  //   exec("git pull", (error, stdout, stderr) => {
  //     if (error) {
  //       console.log(`error: ${error.message}`);
  //       return;
  //     }
  //     if (stderr) {
  //       console.log(`stderr: ${stderr}`);
  //       return;
  //     }
  //     console.log(`stdout: ${stdout}`);
  //   });
  deployController.GitPull();
  res.status(200).send();
});

module.exports = router;
