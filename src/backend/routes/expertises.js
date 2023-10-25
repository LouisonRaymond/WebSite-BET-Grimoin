const express = require('express');
const { getTranslations } = require('../services/translation-service');
const router = express.Router({mergeParams: true});

/* GET expertises page. */
router.get('/', async function (req, res, next) {
  const locale = req.lang;
  const translations = await getTranslations(['global', 'expertises'], locale);

  const model = {
    locale,
    translations
  };
  res.render('expertises', { model });
});

module.exports = router;
