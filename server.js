const express = require('express');

const app = express();

app.use('/routes', express.static(__dirname + '/routes'));
app.use('/components', express.static(__dirname + '/components'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = 8888;
app.listen(port, function() {
  console.log('server listening on port ' + port);
});