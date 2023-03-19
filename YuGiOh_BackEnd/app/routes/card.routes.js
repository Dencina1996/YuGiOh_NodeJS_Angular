module.exports = app => {
  
  const cards = require("../controllers/card.controller.js");

  var router = require("express").Router();

  // Retrieve all Cards
  router.get("/", cards.findAll);

  app.use('/api/cards', router);
};