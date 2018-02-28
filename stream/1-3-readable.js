var Readable = require('stream').Readable;
var rs = Readable();

var c = 97 - 1;

rs._read = function () {
    if (c >= 'z'.charCodeAt(0)) return rs.push(null);    // 'z'.charCodeAt(0) = 122
                                                         // https://www.w3schools.com/charsets/ref_utf_basic_latin.asp

    setTimeout(function () {
        rs.push(String.fromCharCode(++c));
    }, 100);
};

rs.pipe(process.stdout);

process.on('exit', function () {
    console.error('\n_read() called ' + (c - 97) + ' times');
});
process.stdout.on('error', process.exit);


// abcdefghijklmnopqrstuvwxyz
// _read() called 25 times
