const os = require("os");

console.info(os.platform()) //platform
console.info(os.arch())//cpu arch
console.info(os.cpus())//cpu core info
console.info(os.freemem())// free memory
console.info(os.totalmem())// total memory
console.info(os.homedir())// home dir
console.info(os.uptime())// uptime

