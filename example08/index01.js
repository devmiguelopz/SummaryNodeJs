const fs = require("fs");
const path = require("path");

function createDirectoryPromise() {
  return (new Promise((resolve, rejected) => {
    fs.mkdir(path.join(__dirname, "/test"), {}, (error) => {
      if (error) rejected(error);
      else resolve();
    })
  }));
}
function createWriteFilePromise() {
  return (new Promise((resolve, rejected) => {
    fs.writeFile(path.join(__dirname, "/test", "NodeJs.txt"), "Node js.", (error) => {
      if (error) rejected(error);
      else resolve();
    })
  }));
}
function createAppedFilePromise() {
  return (new Promise((resolve, rejected) => {
    fs.appendFile(path.join(__dirname, "/test", "NodeJs.txt"), " I love node js.", (error) => {
      if (error) rejected(error);
      else resolve();
    })
  }));
}
async function Run() {
  try {
    await createDirectoryPromise();
    console.info("Directory created");
    await createWriteFilePromise();
    console.info("File an text created")
    await createAppedFilePromise();
    console.info("Append text created");
  } catch (exception) {
    console.error(exception);
  }
}

Run();

