var fs = require('fs');
fs.readFile('data.txt', function (err, data) {
  if (err)
    throw err;
  if (data)
    console.log(data.toString('utf8'));
});
