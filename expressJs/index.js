const express = require('express');
const url = require('url');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
      return res.send("Hello! how are u? ")
})
app.get('/api/user/:id', (req, res) => {
      const username = req.query.username || "Guest"; 
      const myUrl = url.parse(req.url);
      console.log(myUrl)
      let id = Number(req.params.id);
      if(isNaN(id) || id <= 0){
        return res.status(404).json({status: "Rejected", error: `${id} user id not available`});
      }
      return res.send(`Hello! how are u ${username} your user id ${id}? `);
})


app.listen(8001, (err) => {
    console.log("server activate");
})
