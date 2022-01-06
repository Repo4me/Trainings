console.log("Hello");
var http = require('http');


http.createServer((req, resp) => {

    if(req.url == '/home') {
        resp.write('<h1>Home page</h1>');
        resp.end();
    } else {
        resp.write('<h1>Welcome</h1>');
        resp.end();
    }
}).listen(3000, () => console.log('Server Started ...'));