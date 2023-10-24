const express = require('express');
const router = express.Router({mergeParams: true});

/* GET expertises page. */
router.get('/', async function (req, res, next) {
  const locale = req.lang;

  const model = {
    locale
  };
  res.render('expertises', { model });
});

module.exports = router;
