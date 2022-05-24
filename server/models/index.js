const mongoose = require('mongoose');
const { uri } = require('../config.env');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error', err)
})


db.once('open', function () {
  console.log('Connection to DB successful')
})

module.exports = mongoose;