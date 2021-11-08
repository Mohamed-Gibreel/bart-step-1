const express = require("express");
const router = express.Router();
const fileController = require("../controller/file.controller.js");

let routes = (app) => {
  router.get("/", (req, res) => {
    res.send("Hello world !");
  });

  router.post("/multiple-upload", fileController.multipleUpload);

  return app.use("/", router);
};

module.exports = routes;
