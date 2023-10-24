const express = require('express');
const { getProjects } = require('../services/project-service');
const router = express.Router({mergeParams: true});

/* GET home page. */
router.get('/', async function (req, res, next) {
  const locale = req.lang;
  const projects = await getProjects('private', 1, 6, locale);

  const model = {
    locale,
    projects
  };
  res.render('private-projects', { model });
});

module.exports = router;
