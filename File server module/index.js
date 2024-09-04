var fs = require('fs');

fs.writeFile('mytextfile.txt', 'I change the content', function (err) {
    if (err){
        console.log('Content changed!');
    }
});