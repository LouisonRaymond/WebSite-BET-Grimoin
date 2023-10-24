var express = require('express');
var router = express.Router({mergeParams: true});

/* GET contact : send a message to the contact email. */
router.get('/', function (req, res, next) {
  const locale = req.lang;
  const model = {
    locale
  };
  res.render('contact', { model });
});

/* POST contact : send a message to the contact email. */
router.post('/', function (req, res, next) {
  console.log('contact form data :', req.body);

  const locale = req.lang;
  const model = {
    locale
  };
  res.render('contact', { model });
});

module.exports = router;
