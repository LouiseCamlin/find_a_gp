const express = require("express");

const createRouter = function(data) {
  console.log("data?", data);

  const router = express.Router();

  router.get("/", (req, res) => {
    res.json(data);
  });

  return router;
};

module.exports = createRouter;
