var express = require('express');
var router = express.Router();

/* POST contact : send a message to the contact email. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
