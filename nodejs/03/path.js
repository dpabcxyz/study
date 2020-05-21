const path=require('path');
var testPath='f:code/node/chenxuan.js'

console.log(path.basename(testPath));
console.log("-----------------------");
console.log(path.dirname(testPath));
console.log("-----------------------");
var myPath=path.join(__dirname,'--hehe1','hehehe2','hehehe3');
console.log(myPath);
console.log("-----------------------");
var objPath=path.parse(myPath)
console.log(objPath);
console.log("-----------------------");
var strPath =path.format(objPath);
console.log(strPath);