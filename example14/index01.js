const http = require("http");
const path = require("path");
const fs = require("fs");
function createReadFilePromise(page) {
  console.log(page);
  return (new Promise((resolve, rejected) => {
    fs.readFile(path.join(__dirname, "/Public",page ), (error, data) => {
      if (error) rejected(error);
      else resolve(data);
    })
  }));
}
function CallReadFilePromise(page,objServer) {
  createReadFilePromise(page)
  .then((data)=>{
    ResponseServer(Object.assign({Data:data,Code:200}, objServer))
  })
  .catch((exception)=>{
    console.log(exception);
    ResponseServer(Object.assign({Data:"<h1>Error</h1>",Code:404}, objServer));
  })
}
function ResponseServer(objServer) {
  objServer.response.writeHead(200,{"Content-Type": "text/html"})
  objServer.response.end(objServer.Data);

}
const server = http.createServer((request,response) => {
  let page = "";
  switch (request.url) {
    case "/":
        page = "index.html";
        break;
    default:
        page = "notfound.html";
      break;
  }
  CallReadFilePromise(page,{request,response})
})
const port = process.env.PORT || 3000;
server.listen(port,()=>{
  console.log(`Server running on port ${port}`)
})




