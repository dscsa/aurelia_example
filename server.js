const express = require('express');

const app = express();

app.use('/src', express.static(__dirname + '/src'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = 8888;
app.listen(port, function() {
  console.log('server listening on port ' + port);
});