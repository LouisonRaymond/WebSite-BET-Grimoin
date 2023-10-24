const express = require('express');
const { getProjects } = require('../services/projectService');
const router = express.Router({ mergeParams: true });

/* GET home page. */
router.get('/', async function (req, res, next) {
  if (!req.lang) {
    return res.redirect('/fr');
  }

  const locale = req.lang;
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
