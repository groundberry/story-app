var express = require('express');
var router = express.Router();

var options = [
  {
    sentence: "The ____ lives in the ____."
  },
  {
    sentence: "The ____ is sitting on the ____."
  }
];

/* GET sentences. */
router.get('/', function(req, res, next) {
  var index = Math.floor(Math.random() * options.length);
  res.json(options[index]);
});

module.exports = router;
