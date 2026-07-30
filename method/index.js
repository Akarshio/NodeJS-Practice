const express = require("express");
const data = require('./MOCK_DATA.json'); 
const app = express();
const PORT = 8000;
const fs = require('fs');

app.use(express.urlencoded({ extended: false }))

app.route('/users')
    .get((req , res) => {
        const html = `
        <ul>
        ${data.map((u) => {
           return   `<li>${u.first_name}</li>`
        }).join("")}
        </ul>
        `
      return  res.send(html);
    })
    .post((req, res) => {
        const body = req.body;
        let newId = data.length > 0 ? Math.max(...data.map(user => user.id)) + 1 : 1;
        data.push({id: newId, ...body})
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
              return res.status(200).json({
                     status: "Suceess",
                     id: data.length
        })
        } )
        
    })

app.route('/api/users/:id')
    .get((req , res) => {
        let id = Number(req.params.id);
         if (isNaN(id) || id <= 0) {
            return res.status(400).json({ error: "Invalid ID format. ID must be a number." });
        }
        const userDetails = data.find( (u) => u.id === id);
        if(!userDetails){
           return res.status(404).json({error : "user not found"})
        } 
        return res.json(userDetails);

    })
    .put((req, res) => {
        return res.status(202).json({
            status: "pending",
        })
    })
    .patch((req , res) => {
       const body = req.body;
       let id = Number(req.params.id);

       if(isNaN(id) || id <= 0){
            return res.status(404).json({
                status: false,
                error: "User not found"
            })
        }
        const index = data.findIndex( u => u.id === id);

        data[index] = { ...data[index], ...body };
       fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
            if(err){
                return res.status(500).json({status: "failed"});
            }
            return res.status(200).json({status: "succes", message: "edited"})
       })
    })

    .delete((req, res) => {
        let id = Number(req.params.id);

        if(isNaN(id) || id <= 0){
            return res.status(404).json({
                status: false,
                error: "User not found"
            })
        }

        const deleteUser = data.findIndex((u) => u.id === id );

        if(deleteUser !== -1 ){
            data.splice(deleteUser, 1);
             fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
              return res.status(200).json({
                     status: "Suceess",
                     id: data.length - 1
        })
        } )
             return res.status(200).json({
                     status: true,
                     sucess: "user deleted",

        })
        }
        
        
            return res.status(404).json({
                status: false,
                error: "User not found"

            })
        
       
    })      




app.listen(PORT, () => {
    console.log(`this is the server http://localhost:${PORT}`);
})    