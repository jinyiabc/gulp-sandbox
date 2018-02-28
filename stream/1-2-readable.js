var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;   // => A
rs._read = function () {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);
// output : abcdefghijklmnopqrstuvwxyz
