const express = require("express");
const mainRoute = require("./route.config");


const app = express();


app.use(mainRoute)
console.log("Testing phase 2")
module.exports = app;
