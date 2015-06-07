var exec = require('child_process').execSync;
var output = '[' + exec('git log --pretty=format:\'{"commit":"%H","author":"%an","email":"%ae","date":"%ad","message":"%f"},\'').toString().slice(0, - 1) + ']';
var json = JSON.parse(output);
console.log(JSON.stringify(json, null, 4))
