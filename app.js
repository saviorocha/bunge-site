let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let compression = require('compression');
let helmet = require('helmet');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let applicationRouter = require('./routes/application');

let mongoose = require('mongoose');
// let mongoDB = 'mongodb+srv://dbUser:INgtEcj2Q1@cluster0.gdzwl.gcp.mongodb.net/bunge?retryWrites=true&w=majority';
let dev_db_url = 'mongodb+srv://dbUser:INgtEcj2Q1@cluster0.gdzwl.gcp.mongodb.net/bunge?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
let db = mongoose.connection;

let app = express();

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/application', applicationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
