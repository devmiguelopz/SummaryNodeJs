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
function createReadFilePromise() {
  return (new Promise((resolve, rejected) => {
    fs.readFile(path.join(__dirname, "/test", "NodeJs.txt"), "utf8", (error, data) => {
      if (error) rejected(error);
      else resolve(data);
    })
  }));
}
function createRenameFilePromise() {
  return (new Promise((resolve, rejected) => {
    fs.rename(
      path.join(__dirname, "/test", "NodeJs.txt"),
      path.join(__dirname, "/test", "RenameNodeJs.txt"),
      (error) => {
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
    const data= await createReadFilePromise();
    console.info(`Read file: ${data}`)
    await createRenameFilePromise();
    console.info("Change file text");
  } catch (exception) {
    console.error(exception);
  }
}

Run();

