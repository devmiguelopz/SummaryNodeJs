const fs = require("fs");
const path = require("path");

function CreateFolerPromise() {
  return (new Promise((resolve, rejected) => {
    fs.mkdir(path.join(__dirname, "/test"), {}, (error) => {
      if (error) rejected(error);
      else resolve();
    })
  }));
}
async function Run() {
  try {
    await CreateFolerPromise();
    console.info("Finish function async run");
  } catch (exception) {
    console.error(exception);
  }
}

Run();
console.info("After Run");

