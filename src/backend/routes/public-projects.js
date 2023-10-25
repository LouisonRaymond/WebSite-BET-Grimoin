const express = require('express');
const { getProjects } = require('../services/project-service');
const router = express.Router({mergeParams: true});

/* GET home page. */
router.get('/', async function (req, res, next) {
  const locale = req.lang;
  const projects = await getProjects('public', 1, 6, locale);

  const model = {
    delays: ['0.3s', '0.3s', '0.1s', '0.5s', '0.5s', '0.5s'],
    locale,
    projects
  };
  res.render('public-projects', { model });
});

module.exports = router;
