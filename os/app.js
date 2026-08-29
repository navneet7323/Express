
const os = require("os");

console.log("Platform:", os.platform());

console.log("Architecture:", os.arch());

console.log("CPU:", os.cpus()[0].model);

console.log("CPU Cores:", os.cpus().length);

console.log("Total Memory:", os.totalmem() / 1024 / 1024 / 1024, "GB");

console.log("Free Memory:", os.freemem() / 1024 / 1024 / 1024, "GB");

console.log("Username:", os.userInfo().username);

console.log("Home Directory:", os.userInfo().homedir);

console.log("Network:", os.networkInterfaces());

