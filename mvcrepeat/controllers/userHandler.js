const {User} = require("../models/user");


async function  handlerCreateUser(req , res) {

    try{
        const {firstname, lastname, email, gender,jobtitle }  = req.body;
        if(!firstname || !email) return res.status(400).json({msg: "fill all details"})
        const userData =  await User.create({
        firstname,
        lastname,
        gender,
        email,
        jobtitle
     })
       return res.status(202).json({msg: "new user Created"})

    }catch(err){
        return res.status(500).json({msg: "Internal server problem"})
    }
    
}

async function handlerdeleteUser(req , res) {
    try{
          const userDel = await User.findByIdAndDelete(req.params.id);
          if(!userDel) return res.status(404).json({msg: "user not found"})
          return res.status(200).json({msg: "user delete"});
    }catch(err){
          return res.status(404).json({msg: "Invalid ID format"});
    }
}

async function handlerUpdateUser(req, res) {
       try{
           const updateUser = await User.findByIdAndUpdate( req.params.id, req.body, {runValidators: true})
           if(!updateUser) return res.staus(404).json({msg: "user not found"});
           return res.status(200).json({msg: "user updated"})
       }catch(err){
             return res.status(404).json({msg: "user not found"})
       }
}

async function handleFetchUser(req, res) {

    try{
           const userDetails = await User.find({});
            return res.json(userDetails)
    }catch(err){
        return res.status(404).json({msg: "user not found"})
    }
     

}

async function handlerFetchUserById(req, res) {
      const userDetails = await User.findById(req.params.id);
      if(!userDetails) return res.status(404).json({msg: "user not find"})
      return res.status(200).json(userDetails);
      
}    

module.exports = {
   handlerCreateUser,
   handlerdeleteUser,
   handlerUpdateUser,
   handleFetchUser,
   handlerFetchUserById


}

