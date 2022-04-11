const fs = require("fs");    

const Data = fs.readFileSync(process.argv[2]);

const lines = Data.toString().split('\n').length-1;
console.log(lines);