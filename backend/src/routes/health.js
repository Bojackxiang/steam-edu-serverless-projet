const express = require("express");
const router = express.Router();

// health check
router.get("/", async (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
  });
});

module.exports = router;
