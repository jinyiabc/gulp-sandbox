var fs = require('fs');
fs.stat('data.txt', function (err, stats) {
 if (err)
    throw err;
 if (stats.isFile()) {
     console.log('It\'s a file!');
 }
 if (stats.isDirectory()) {
   console.log('It\'s a directory!');
 }
 // for (var i in stats) {
 //    if ('function' !== typeof stats[i])
 //    console.log(i + '\t= ' + stats[i]);
 //  }
 console.log(stats);
 });
fs.rename('data2.txt', 'data2_new.txt', function (err) {
 if (err)
   throw err;
 console.log('Renamed!');
});
fs.chmod('data3.txt', '0777', function (err) {
  if (err)
     throw err;
  console.log('File permissions changed!');
});



// fs.chmod()
//Asynchronously changes the permissions of a file
// An easier method of constructing the mode is to use a sequence of three octal digits
// Number	Description
// 7	read, write, and execute
// 6	read and write
// 5	read and execute
// 4	read only
// 3	write and execute
// 2	write only
// 1	execute only
// 0	no permission
