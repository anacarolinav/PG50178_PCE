var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const mongoose = require('mongoose');
const uri = "mongodb://localhost:9000/registosCOVID";



var app = express();
mongoose.set('strictQuery', true);
mongoose.connect(uri)
  .then(() => console.log('Connected.'))
  .catch(() => console.log('Error connecting to MongoDB.'))


let importador = require('./controller/importLocalFiles')
importador.readFile();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
