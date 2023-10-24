require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { md } = require('./helpers/ejs-helpers');

var indexRouter = require('./routes/index');
var projectRouter = require('./routes/project');
var privateProjectRouter = require('./routes/private-projects');
var publicProjectRouter = require('./routes/public-projects');
var expertisesRouter = require('./routes/expertises');
var contactRouter = require('./routes/contact');

var app = express();
app.locals.md = md;
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
