const express = require("express");
const authRoute = require("../modules/auth/auth.router");

const mainRoute = express.Router();

mainRoute.use("/auth", authRoute);
mainRoute.use("/", (req, res, next) => {
  res.status(404).json({
    result: null,
    message: "not found",
    meta: null,
  });
});

module.exports = mainRoute;
