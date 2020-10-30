const orm = require("../config/orm.js");

const burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  }
  
}

module.exports = burgers;
