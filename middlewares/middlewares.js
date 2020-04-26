const express = require("express");

const middlewares = (app) => {
  //setup middlewares
  app.use("/", express.static("public"));
};

module.exports = middlewares;
