
const burgers = require("../models/burgers");

module.exports = app => {

 
  app.get("/api/burgers", function(req, res) {
    burgers.findAll()
      .then(dbburgerData => res.json(dbburgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

 
  app.post("/api/burgers", function(req, res) {
    
    burgers.create(req.body)
      .then(dbburgerData => res.json(dbburgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


 
  app.get("/api/burgers/:id", function(req, res) {
    burgers.findById(req.params.id)
      .then(dbburgerData => res.json(dbburgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // PUT/update a cat's sleepy to true/false by id
  app.put("/api/burgers/:id", function(req, res) {
    // req.body => {sleepy: true} || {sleepy : false}
    burgers.update(req.body.devorted, req.params.id)
      .then(dbburgerData => res.json(dbburgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // DELETE a cat by its id
  app.delete("/api/burgers/:id", function(req, res) {
    burgers.remove(req.params.id)
      .then(dbburgerData => res.json(dbburgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}
