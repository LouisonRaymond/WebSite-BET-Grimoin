const express = require('express');
const { getProjects } = require('../services/project-service');
const { getTranslations } = require('../services/translation-service');
const router = express.Router({mergeParams: true});

/* GET private projects page. */
router.get('/', async function (req, res, next) {
  const locale = req.lang;
  const projects = await getProjects('private', 1, 6, locale);
  const translations = await getTranslations(['global', 'private-projects'], locale);

  const model = {
    delays: ['0.3s', '0.3s', '0.1s', '0.5s', '0.5s', '0.5s'],
    locale,
    projects,
    translations
  };
  res.render('private-projects', { model });
});

module.exports = router;
