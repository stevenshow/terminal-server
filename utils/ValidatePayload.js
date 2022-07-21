//Validate payload
const sigHeaderName = "X-Hub-Signature-256";
const sigHashAlg = "sha256";

const validatePayload = (req, res, next) => {
  if (req.method == "POST") {
    console.log(req);
    const sig = Buffer.from(req.get(sigHeaderName) || "", "utf8");
    const hmac = crypto.createHmac(sigHashAlg, process.env.CONFIG_SECRET);
    const digest = Buffer.from(
      sigHashAlg + "=" + hmac.update(req.rawBody).digest("hex"),
      "utf8"
    );

    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
      return next(
        `Request body digest (${digest}) did not match ${sigHeaderName} (${sig})`
      );
    }
  }

  return next();
};

module.exports = validatePayload;
