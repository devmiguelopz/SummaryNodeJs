const fs = require("fs");
const path = require("path");

const createFolerPromise = new Promise((resolve, rejected) => {
  fs.mkdir(path.join(__dirname, "/test"), {}, (error) => {
    if (error) rejected(error);
    else resolve();
  })
}).then((resul) => {
  console.info("Created Dir Test");
}).catch((exception) => {
  console.error('Error execute Promise createFolerPromise');
})

