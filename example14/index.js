const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((request,response) => {
  if (request.url === "/") {
    response.writeHead(200,{
      "Content-Type" : "text/html"
    })
    response.end("<h1>home</h1>");
  }
})
const port = process.env.PORT || 3000;
server.listen(port,()=>{
  console.log(`Server running on port ${port}`)
})