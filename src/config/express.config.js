const express = require("express");
const mainRoute = require("./route.config");


const app = express();


app.use(mainRoute)

module.exports = app;
