const { spawn } = require("child_process");

class DeployController {
  constructor() {}

  GitPull = () => {
    const ls = spawn("git", ["pull"]);

    ls.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
    });

    ls.on("error", (error) => {
      console.log(`error: ${error.message}`);
    });

    ls.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  };
}

module.exports = DeployController;
