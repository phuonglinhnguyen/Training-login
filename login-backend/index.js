const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const PORT = 3001;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API file for interacting with MongoDB
const api = require('./routes/api');

// Parsers - middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', api);

app.get('/**', (req, res) => {
  res.send("something is wrong");
})

app.listen(PORT, () => {
  console.log("Server is listening at " + PORT);
})

module.exports = app;