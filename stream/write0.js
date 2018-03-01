//1.creating a writable stream
// var Writable = require('stream').Writable;
// var ws = Writable();
// ws._write = function (chunk, enc, next) {
//     console.dir(chunk);
//     next();
// };
//
// process.stdin.pipe(ws);

// $ (echo beep; sleep 1; echo boop) | node write0.js
// Buffer [ 98, 101, 101, 112, 10 ]
// Buffer [ 98, 111, 111, 112, 10 ]

//2.writing to a writable stream
var fs = require('fs');
var ws = fs.createWriteStream('message.txt');

ws.write('beep ');

setTimeout(function () {
    ws.end('boop\n');
}, 1000);

// Outpub:
// $ cat message.txt
// beep boop
