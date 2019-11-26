const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hai this from index at routes");
});

module.exports = router;
