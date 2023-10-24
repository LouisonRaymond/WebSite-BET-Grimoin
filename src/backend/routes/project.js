const express = require('express');
const { getProject } = require('../services/projectService');
const router = express.Router();

/* GET home page. */
router.get('/:lang?/:id-:title', async function (req, res, next) {
  console.log('lang=' + req.params.lang);
  console.log('id=' + req.params.id);
  const locale = req.params.lang || 'fr';
  const projectId = req.params.id;
  const project = await getProject(projectId, locale);

  const model = {
    locale,
    project
  };
  res.render('project', { model });
});

module.exports = router;
