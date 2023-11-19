const express = require('express');
const { getPrivacyPolicy } = require('../services/privacy-policy-service');
const { getTranslations } = require('../services/translation-service');
const router = express.Router({ mergeParams: true });

/* GET privacy policy page. */
router.get('/', async function (req, res, next) {
  const locale = req.lang;
  const privacyPolicy = await getPrivacyPolicy(locale);
  const translations = await getTranslations(['global', 'privacy-policy'], locale);

  const model = {
    locale,
    translations,
    privacyPolicy
  };
  res.render('privacy-policy', { model });
});

module.exports = router;
