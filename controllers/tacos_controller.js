var express = require("express");
var router = express.Router();
var taco = require("../models/taco");

router.get("/", function(req, res) {
  taco.all(function(data) {
    var hbsObject = {
      tacos: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/tacos", function(req, res) {
  taco.create(["taco_name"], [req.body.name], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/tacos/:id", function(req, res) {
  var condition = "ID = " + req.params.id;

  taco.update(req.body.devoured, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete("/api/tacos/:id", function(req, res) {
  var condition = "ID = " + req.params.id;

  taco.delete(condition, function(result) {
    res.status(200).end();
  });
});

module.exports = router;
