var express = require('express');
const { getTranslations } = require('../services/translation-service');
var router = express.Router({mergeParams: true});

/* GET contact : send a message to the contact email. */
router.get('/', async function (req, res, next) {
  const locale = req.lang;
  const translations = await getTranslations(['global', 'contact'], locale);

  const model = {
    locale
    ,translations
  };
  res.render('contact', { model });
});

/* POST contact : send a message to the contact email. */
router.post('/', async function (req, res, next) {
  console.log('contact form data :', req.body);
  const translations = await getTranslations(['global', 'contact'], locale);

  const locale = req.lang;
  const model = {
    locale,
    translations
  };
  res.render('contact', { model });
});

module.exports = router;
