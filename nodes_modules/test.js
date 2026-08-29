const path = require("path");
const filepath = "node js pratices\nodes_modules\hello/user.txt";

// console.log(path.join("nodes_modules", "hello", "user.txt"));

// console.log(path.resolve("user.txt"));

console.log(path.basename(filepath));
console.log(path.basename(filepath,'.txt'));
console.log(path.extname(filepath));
