var fs = require('fs');
var content = fs.readFileSync('info.json','utf8');
var write = fs.writeFile('text','Trying to figure out JSON','utf8',function(error){
    if(error) throw error ;
    console.log('File written');
});
console.log(content);