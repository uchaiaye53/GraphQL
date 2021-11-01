var fs  = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log("Now read me")
    if(!err){
         fs.writeFile('writeMe.txt', data,function(){
            console.log("Now write me")
         });
    }
   
});


console.log("1st")