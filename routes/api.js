var express = require('express');
var router = express.Router();

var options = [
  {
    sentence: "This is ____, and it is a ____. It loves playing with ____ and hates ____.  It's faviourite place to sit is ____ and it loves eating ____. It's best friend is ____, and it is a ____. They love playing ____ together, it makes them feel ____. "
}
];




/* GET sentences. */
router.get('/', function(req, res, next) {
  var index = Math.floor(Math.random() * options.length);
  res.json(options[index]);
});

module.exports = router;
