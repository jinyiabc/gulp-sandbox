//Working with directories
var fs = require('fs');
fs.readdir('.', function (err, files) {
 if (err)
    throw err;
 for (var index in files) {
    console.log(files[index]);
 }
 });


 /*λ node test
1-path-test.js
data.txt
gulpfile.js
node_modules
package-lock.json
package.json
test.js*/
