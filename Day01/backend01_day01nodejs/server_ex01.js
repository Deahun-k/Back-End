const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, response)=>{
    console.log(request.url);
    response.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"})
    if(request.url === "/profile") {
        response.write("<h2>퇴근하고싶어</h2>");
        response.write("<a href='/'>홈으로 이동</a>");
    }
    if(request.url === "/") {
        response.write("<h2>집가고싶어</h2>");
        response.write("<a href='/profile'>프로필로 이동</a>");
    }
    response.end();
});

server.listen(3000, ()=>{
    console.log("Node.js 서버 실행 중...");
})