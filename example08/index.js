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

createDirectoryPromise()
.then(()=> {
  console.info("Directory created");
  return(createWriteFilePromise())
})
.then(()=> {
  console.info("File an text created")
  return(createAppedFilePromise())
})
.then(()=> {console.info("Append text created")})
.catch((exception) => console.error("Error in Promise",exception))
