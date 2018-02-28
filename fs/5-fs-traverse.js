var fs = require('fs');
var traverseFileSystem = function (currentPath) {
   console.log(currentPath);
   var files = fs.readdirSync(currentPath);
   for (var i in files) {
      var currentFile = currentPath + '/' + files[i];
      var stats = fs.statSync(currentFile);
      if (stats.isFile()) {
      console.log(currentFile);
      }
     else if (stats.isDirectory()) {
            traverseFileSystem(currentFile);
          }
    }
  };
 traverseFileSystem('.');

// Classs : A fs.Stats object provides information about a file.
//fs.statSync ->
//Synchronous stat(2). Returns an instance of fs.Stats
