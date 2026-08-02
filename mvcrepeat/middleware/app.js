const express = require('express');
const fs = require('fs');


const logTracker =  (filename) => {
    return ( req , res , next) =>  {
           const allData = JSON.stringify(req.headers);
           let logData = `${Date.now()}:  ${allData}:  ${req.method} / ${req.path}  ${req.socket.remoteAddress}\n`;
           fs.appendFile(
            filename,
             logData,
             (err) => {
               next();
             }
            )
    }
}


module.exports = {
    logTracker,
}