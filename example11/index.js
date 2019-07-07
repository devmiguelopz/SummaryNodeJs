const url = require("url");

const myUrl = new URL("http://test.com:8000/Public/page.aspx?id=100&status=active");

// serialized URL
console.info(myUrl.href)
console.info(myUrl.toString())
// host (root domain)
console.info(myUrl.host)
// host name not port
console.info(myUrl.hostname)
// path name
console.info(myUrl.pathname)

// serealized query
console.info(myUrl.search)

// serealized query param object
console.info(myUrl.searchParams)

// add param url params
myUrl.searchParams.append("newparam",true);
console.info(myUrl.searchParams)

// loop params
myUrl.searchParams.forEach((value,name)=> console.info(`${name} : ${value}`));
