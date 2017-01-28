const fs = require('fs');
const filePath = '/data/test.txt';

const data = 'Hello, World!';
fs.writeFile(filePath, data, err => {
  if (err) throw err;

  console.log('write was successful');

  fs.readFile(filePath, (err, buf) => {
    if (err) throw err;
    console.log('read got:', buf.toString());
  });
});

