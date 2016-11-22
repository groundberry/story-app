var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
 res.render('index', { title: 'Express' });
=======
  res.render('index', { title: 'Wordzilla' });
>>>>>>> 5a5ee3f224c4535d46ddc40abde699e1e32890ca
});

module.exports = router;
