    
const db = require("../models");

module.exports = app => {

  // GET all burgers
  app.get("/api/burgers", function (req, res) {
    db.burgers.findAll()
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // CREATE/POST a new burger
  app.post("/api/burgers", function (req, res) {
    db.burgers.create(req.body)
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  // UPDATE burger
  app.put("/api/burgers/:id", function (req, res) {

    console.log(req.body)
    db.burgers.update({
      devoured: req.body.devoured
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

};