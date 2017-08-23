const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello Something New!')
});

app.listen(port, function () {
  console.log(`Express app listening on port ${port}!`)
});
