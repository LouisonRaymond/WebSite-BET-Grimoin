require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs');
const { md, get } = require('./helpers/ejs-helpers');

const indexRouter = require('./routes/index');
const projectRouter = require('./routes/project');
const privateProjectRouter = require('./routes/private-projects');
const publicProjectRouter = require('./routes/public-projects');
const expertisesRouter = require('./routes/expertises');
const privacyPolicyRouter = require('./routes/privacy-policy');
const termsOfUseRouter = require('./routes/terms-of-use');
const contactRouter = require('./routes/contact');

const app = express();
app.locals.md = md;
app.locals.get = get;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.param('lang', function (req, res, next, lang) {
  req.lang = lang || 'fr';
  next();
})

app.use('/:lang?/', indexRouter);
app.use('/:lang/projet', projectRouter);
app.use('/:lang/domaine-privee', privateProjectRouter);
app.use('/:lang/domaine-publique', publicProjectRouter);
app.use('/:lang/expertises', expertisesRouter);
app.use('/:lang/politique-de-confidentialite', privacyPolicyRouter);
app.use('/:lang/conditions-d-utilisation', termsOfUseRouter);
app.use('/:lang/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
