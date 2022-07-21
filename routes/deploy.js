const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

//TODO extract to controller?

router.post("/repo-push-event", (req, res) => {
  exec("git pull", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  res.status(200).send();
});

module.exports = router;
