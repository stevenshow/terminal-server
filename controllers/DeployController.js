const { spawn } = require("child_process");
const chalk = require("chalk");

class DeployController {
  constructor() {}

  GitPull = () => {
    const ls = spawn("git", ["pull"]);

    ls.stdout.on("data", (data) => {
      console.log(chalk.cyan(`stdout: ${data}`));
    });

    ls.on("error", (error) => {
      console.log(`error: ${error.message}`);
    });

    ls.on("close", (code) => {
      console.log(
        `child process exited with code ${
          code === 0 ? chalk.green(code) : chalk.red(code)
        }`
      );
    });
  };
}

module.exports = DeployController;
