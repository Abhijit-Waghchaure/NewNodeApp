var express = require('express');

var app = express();

// Respond with "Hello, World!" for requests that hit our root "/"
app.get('/', function (req, res) {
  res.send('Hello, World!');
});

// Listen to port 3000 by default
app.listen(process.env.PORT || 3000, function () {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

module.exports = app;

