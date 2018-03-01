process.stdin.on('readable', function () {
    var buf = process.stdin.read(3);
    // You can also tell .read(n) to return n bytes of data.
    // var buf = process.stdin.read(3);

    console.dir(buf);
});

// console.log prints the element in an HTML-like tree
// console.dir prints the element in a JSON-like tree

// With read(n)
// Buffer [ 97, 98, 99 ]
// Buffer [ 10, 100, 101 ]
// Buffer [ 102, 10, 103 ]

// with read()
// Buffer [ 97, 98, 99, 10 ]
// Buffer [ 100, 101, 102, 10 ]
// Buffer [ 103, 104, 105, 10 ]
// null
