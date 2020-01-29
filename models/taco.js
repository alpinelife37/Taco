const orm = require("../config/orm.js");

const taco = {
  all: function(cb) {
    orm.selectAll("tacos", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.insertOne("tacos", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(booleanValue, condition, cb) {
    orm.updateOne("tacos", booleanValue, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.deleteOne("tacos", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = taco;
