const http = require('http');
const fs = require('fs').promises;
const url = require("url");

// const myServer = http.createServer( (req, res) => {
//      const clientIp = req.socket.remoteAddress;
//      console.log(`client url address ${req.url} ,  client method request is ${req.method} , client ip is ${clientIp}`);
     
//      res.end("Hello welcome to my home page ");
// })
// const path = 8000;
// myServer.listen(path, '127.0.0.1',  () => {
//        console.log(`server is on http://localhost:${path}`);
// });

// const myServer = http.createServer((req , res) => {
//     let log = req.socket.remoteAddress;
//     fs.appendFile('./clientData.txt', `this is clientIp ${log}\n` , (err, data) => {
//         if(err) throw err;
//         return res.end("error");
        
//     })

//     console.log("your ip capture");
//     res.end("welcome to home page");
// })

// myServer.listen('8000',  () => {
//     console.log("server on");
// })

// const myServer = http.createServer( (req , res) => {
//     const qr = url.parse(req.url, true);
//     const addres = `${req.url}\n`;
//     fs.appendFile('./clientData.txt', addres, (err) => {
//         if(err) throw err
//         res.end("error");
//     } )
//     switch(qr.pathname){
//         case '/': 
//         res.end("welcome to page");
//         break;
//         case "/about": 
//         const username = qr.query.username || "Guest";
//         res.end(`Hi, ${username}`)
//         break;
//         default:
//             res.end("404, Not found");
//     }
    
// })

// myServer.listen(8000, () => {
//     console.log("Server on");
// })

// const myServer = http.createServer((req, res) => {
//       const myUrl = url.parse(req.url);
//       if(myUrl.pathname === '/favicon.ico') return res.end();
       
//       console.log(myUrl);
//       res.end("hello how are you?")
// })

// myServer.listen(8000, () => {
//     console.log("server active");
// })

