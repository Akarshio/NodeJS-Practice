const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8004;



app.use(express.urlencoded({extended: false}));
app.use(express.json());

 mongoose.connect('mongodb://localhost:27017/dummyDB')
        .then(() => console.log("Succes connected"))
        .catch((err) =>  console.log("ERROR: ", err))

const userSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String
    },
    Age:{
        type: Number,
        required: true
    },
    Gender:{
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    jobTitle: {
             type: String,
    }
}, {timestamps: true});

const User = mongoose.model('user', userSchema);

app.route('/api/user/:id')
   .get(async (req, res) => {
     try{
          const userDataById   =  await User.findById(req.params.id);
          if(userDataById){
           return res.status(200).json(userDataById);
        }
         return res.status(404).json({msg: "User not found"}); 
         
     }catch(err){
            return res.status(404).json({msg: "Invalid ID format" })
     }

      
   } )
   .patch( async (req, res) => {
         
      try{
          
           const updatedReq = await User.findByIdAndUpdate(req.params.id, req.body, { runValidators: true});
           return res.status(202).json({msg: "user updated sucessfuly"});
      }catch(err){
          return res.status(500).json({msg: "Internal server problem"});
      }
      

   } )
   .delete(async (req, res) => {
       try{
           const deleteReq = await User.findByIdAndDelete(req.params.id);
           if(!deleteReq) return res.status(404).json({msg: "User not found"});
           return res.status(202).json({msg: "User deleted successfully", data: deleteReq});
      }catch(err){
          return res.status(500).json({msg: "Internal server problem"});
      }
      

   } )
app.route('/user')
   .get(async (req, res) => {
    try{
          const alldbUser = await User.find({});
          const html = `
         <ul>
            ${alldbUser.map( user => `<li>${user.firstName} -- ${user.email} -- ${user.id}</li>`).join("")}
         </ul>
        `
        return res.status(200).send(html);
     
    }catch(err){
        return res.status(500).json({
            error: err
        })
    }
   

   } )
   .post( async (req, res) => {
      let body = req.body;
      if(!body.firstName || !body.email){
        return res.status(400).json({
            msg: "fill all fields"
        })
      }
      try{
          const userDetails = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email:body.email,
            Age: body.Age,
            jobTitle: body.jobTitle,
            Gender: body.Gender
            
        })
        return res.status(201).json({msg: "new user creted"})
      }catch(err){ 
                  return res.status(500).json({msg: 
                    "Internal Server Error"
                  })
      }
       

   } )




app.listen(PORT, () => {
    console.log(`server is runing http://localhost:${PORT}`)
})

