const { spawn } = require("child_process");
const chalk = require("chalk");
const log = console.log();

class DeployController {
  constructor() {}

  GitPull = () => {
    const ls = spawn("git", ["pull"]);

    ls.stdout.on("data", (data) => {
      log(chalk.cyan(`stdout: ${data}`));
    });

    ls.stderr.on("data", (data) => {
      log(`stderr: ${data}`);
    });

    ls.on("error", (error) => {
      log(`error: ${error.message}`);
    });

    ls.on("close", (code) => {
      log(`child process exited with code ${code}`);
    });
  };
}

module.exports = DeployController;
