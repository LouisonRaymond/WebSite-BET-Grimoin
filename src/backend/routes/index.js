const express = require('express');
const { getProjects } = require('../services/projectService');
const router = express.Router();

/* GET home page. */
router.get('/:lang?/', async function (req, res, next) {
  console.log('lang=' + req.params.lang);
  const locale = req.params.lang || 'fr';
  const page = 1;
  const pageSize = 6;
  const projects = await getProjects(null, page, pageSize, locale);

  const model = {
    delays: ['0.1s', '0.3s', '0.5s', '0.1s', '0.3s', '0.5s'],
    locale,
    projects
  };
  res.render('index', { model });
});

module.exports = router;
