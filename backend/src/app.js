const express = require("express");
const app = express();
const { healthRouter } = require("./routes");

app.use(express.json());

app.use("/health", healthRouter);
// app.use("/tasks", require("./routes/tasks"));
// app.use("/upload", require("./routes/upload"));
// app.use("/approval", require("./routes/approval"));

module.exports = app;
