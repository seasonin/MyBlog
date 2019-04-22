/*var http = require('http'); 
//使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('hello world\n');
}).listen(8888);

console.log('server running at http://127.0.0.1:8888');*/
//调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号

var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello yxm");
    response.end();
}).listen(9820);
