var fs = require('fs');
fs.writeFile('data2.txt', 'Hello, World!', function (err) {
     if (err)
       throw err;
});
