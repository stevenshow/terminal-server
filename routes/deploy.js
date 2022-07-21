// const express = require("express");
// const DeployController = require("../controllers/DeployController");

// const deployController = new DeployController();

//Validate payload
const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
const sigHeaderName = "X-Hub-Signature-256";
const sigHashAlg = "sha256";
const router = express.Router();
const app = express();
// Saves a valid raw JSON body to req.rawBody
// Credits to https://stackoverflow.com/a/35651853/90674
app.use(
  bodyParser.json({
    verify: (req, res, buf, encoding) => {
      if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || "utf8");
      }
    },
  })
);

const validatePayload = (req, res, next) => {
  if (!req.rawBody) {
    return next("Request body empty");
  }
  if (req.method == "POST") {
    const sig = Buffer.from(req.get(sigHeaderName) || "", "utf8");
    console.log("sig ", sig);
    const hmac = crypto.createHmac(sigHashAlg, process.env.CONFIG_SECRET);
    console.log("hmac ", hmac);
    const digest = Buffer.from(
      sigHashAlg + "=" + hmac.update(req.rawBody).digest("hex"),
      "utf8"
    );
    console.log("digest", digest);

    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
      return next(
        `Request body digest (${digest}) did not match ${sigHeaderName} (${sig})`
      );
    }
  }

  return next();
};

router.post("/repo-push-event", validatePayload, (req, res) => {
  // deployController.GitPull();
  res.status(200).send();
});

module.exports = router;
