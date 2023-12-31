const express = require('express');
const { getTranslations } = require('../services/translation-service');
const { sendMail } = require('../services/mail-service');
const { createContactMessage } = require('../services/contact-service');
const router = express.Router({ mergeParams: true });
const sendEmail = process.env.SEND_EMAIL === 'true';

/* GET contact : send a message to the contact email. */
router.get('/', async function (req, res, next) {
  const locale = req.lang;
  const translations = await getTranslations(['global', 'contact'], locale);

  const model = {
    locale,
    translations,
    contactMessage: {}
  };
  res.render('contact', { model });
});

/* POST contact : send a message to the contact email. */
router.post('/', async function (req, res, next) {
  console.log('contact form data :', req.body);
  const locale = req.lang;
  let successMessage = '';
  let errorMessage = '';
  const translations = await getTranslations(['global', 'contact'], locale);

  try {
    const contactMessage = {
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      company: req.body.company,
      message: req.body.message,
    };
    await createContactMessage(contactMessage);

    if (sendEmail) {
      const from = req.body.email;
      const subject = `Nouveau message du formulaire de contact (${req.body.lastname} ${req.body.firstname} <${req.body.email}>)`;
      const textMessage = `Nom: ${req.body.lastname}\nPrenom: ${req.body.firstname}\nEmail: ${req.body.email}\nSociété: ${req.body.company}\nMessage:\n${req.body.message}`;
      await sendMail({ subject, textMessage, from });
    }

    successMessage = translations['contact.successMessage'];
  } catch (error) {
    console.error(error);
    errorMessage = translations['contact.errorMessage'];
  }

  const model = {
    locale,
    translations,
    successMessage,
    errorMessage,
    contactMessage: !!errorMessage ? req.body : {},
  };
  res.render('contact', { model });
});

module.exports = router;
