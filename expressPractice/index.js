const express = require('express');
const  userData = require('./MOCK_DATA.json');
const fs = require('fs');
const app = express();
const PORT = 8002;


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.all('/api/user/:id', (req, res, next) => {
      let id = Number(req.params.id);
      if(isNaN(id) || id <= 0){
        return res.status(404).json({msg: "id is not a number or less than 1"})
      }
      const userFetch = userData.find( u => u.id === id);
      
      if(!userFetch) return res.status(404).json({msg: "user not find"});
      req.user = userFetch;
       next();
})

app.post('/user', (req, res, next) => {
     
      next();
})

app.route('/user')
   .get((req, res) => {
    return res.status(200).json(userData);
   })
   .post((req, res) => {
      const body = req.body;
      const newId = userData.length > 0  ? Math.max(...userData.map(u => u.id)) + 1 : 1;
      const newUser = {id: newId , ...body}
      userData.push(newUser)
      fs.writeFile('./MOCK_DATA.json', JSON.stringify(userData), (err) => {
        if(err) return  res.status(500).json({msg: "user not created"})
        return res.status(302).json({msg: "user created"})
      })
   })

app.route('/api/user/:id') 
    .get((req, res) => {
        const datafe = req.user;
        return res.json(datafe).status(200)
    })
    .patch((req, res) => {})
    .delete((req, res) => {})






app.listen(PORT, (err) => {
    console.log(`this server on this addres http://localhost:${PORT}`);
})