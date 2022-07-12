const mongoose = require('mongoose');
require('dotenv').config('../.env');

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error', err)
})


db.once('open', function () {
  console.log('Connection to DB successful')
})

module.exports = mongoose;