const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to express-demo!');
});

app.get('/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`Hello, ${name}!`);
});

const port = 3000;
app.listen(port, () => console.log('listening on port', port));
