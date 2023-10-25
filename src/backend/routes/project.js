const express = require('express');
const { getProject } = require('../services/project-service');
const { getTranslations } = require('../services/translation-service');
const router = express.Router({mergeParams: true});

/* GET home page. */
router.get('/:id-:title', async function (req, res, next) {
  console.log('id=' + req.params.id);
  const locale = req.lang;
  const projectId = req.params.id;
  const project = await getProject(projectId, locale);
  const translations = await getTranslations(['global', 'project'], locale);

  const model = {
    locale,
    project,
    translations
  };
  res.render('project', { model });
});

module.exports = router;
