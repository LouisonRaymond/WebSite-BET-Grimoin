const express = require('express');
const { getTermsOfUse } = require('../services/terms-of-use-service');
const { getTranslations } = require('../services/translation-service');
const router = express.Router({ mergeParams: true });

/* GET terms of use page. */
router.get('/', async function (req, res, next) {
  const locale = req.lang;
  const termsOfUse = await getTermsOfUse(locale);
  const translations = await getTranslations(['global', 'terms-of-use'], locale);

  const model = {
    locale,
    translations,
    termsOfUse
  };
  res.render('terms-of-use', { model });
});

module.exports = router;
