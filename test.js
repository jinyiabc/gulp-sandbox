// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function (req, res) {
//     fs.readFile(__dirname + '/data.txt', function (err, data) {
//         res.end(data);
//     });
// });
// server.listen(8000);


var fs = require('fs');
fs.readdir('.', function (err, files) {
 if (err)
    throw err;
 for (var index in files) {
    console.log(files[index]);
 }
 });
