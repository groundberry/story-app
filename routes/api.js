var express = require('express');
var router = express.Router();

var options = [
  {
    sentence: "This is ____, and he is a ____. He loves playing with  ____ and hates ____.  His favourite place to sit is on the ____, and he loves eating ____. His best friend is ____, and she is a ____. They love playing ____ together, it makes them feel ____. "
}
];




/* GET sentences. */
router.get('/', function(req, res, next) {
  var index = Math.floor(Math.random() * options.length);
  res.json(options[index]);
});

module.exports = router;
