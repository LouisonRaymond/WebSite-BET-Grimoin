const express = require('express');
const { getProjects } = require('../services/project-service');
const { getTestimonials } = require('../services/testimonial-service');
const { getTranslations } = require('../services/translation-service');
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
  const testimonials = await getTestimonials(page, 10, locale);
  const translations = await getTranslations(['global', 'home'], locale);

  const model = {
    delays: ['0.1s', '0.3s', '0.5s', '0.1s', '0.3s', '0.5s'],
    locale,
    projects,
    testimonials,
    translations
  };
  res.render('index', { model });
});

module.exports = router;
