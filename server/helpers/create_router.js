const express = require("express");

const createRouter = function(data) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json(data);
  });

  router.get("/:id", (req, res) => {
    res.json(data[req.params.id]);
  });

  return router;
};

module.exports = createRouter;
