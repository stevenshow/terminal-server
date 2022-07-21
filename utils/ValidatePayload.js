//Validate payload
const crypto = require("crypto");

const sigHeaderName = "X-Hub-Signature-256";
const sigHashAlg = "sha256";

const validatePayload = (req, res, next) => {
  if (req.method == "POST") {
    const sig = Buffer.from(req.get(sigHeaderName) || "", "utf8");
    console.log("sig ", sig);
    const hmac = crypto.createHmac(sigHashAlg, process.env.CONFIG_SECRET);
    console.log("hmac ", hmac);
    const digest = Buffer.from(
      sigHashAlg + "=" + hmac.update(req.rawBody).digest("hex"),
      "utf8"
    );
    console.log("digest ", digest);

    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
      return next(
        `Request body digest (${digest}) did not match ${sigHeaderName} (${sig})`
      );
    }
  }

  return next();
};

module.exports = validatePayload;
