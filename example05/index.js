const path = require("path");

// Base file name 
console.info(path.basename(__filename));

// Directory name 
console.info(path.dirname(__filename));

// File extension
console.info(path.extname(__filename));

// Create path object  
console.info(path.parse(__filename).base);

// Concatenate paths 
console.info(path.join(__dirname),"test","hello.html");

//https://www.youtube.com/watch?v=fBNz5xF-Kx4