var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep ');
rs.push('boop\n');
rs.push(null);
//rs.push(null) tells the consumer that rs is done outputting data.
rs.pipe(process.stdout);
