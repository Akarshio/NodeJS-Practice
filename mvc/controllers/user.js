const { User } = require("../models/user.js");

async function createUser(req, res) {
  try {
    const { firstName, lastName, age, email, gender, jobTitle } = req.body;
    if (!firstName || !email || !gender)
      return res.status(400).json({ msg: "fill all details" });
    const userData = await User.create({
      firstName,
      lastName,
      age,
      email,
      gender,
      jobTitle,
    });

    return res.status(202).json({ msg: "user created" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal server problem" });
  }
}
async function getUser(req, res) {
      try{ 
            const user = await User.find({}).lean();
            if(!user || user.length === 0) return res.status(404).json({msg: "No user found"});
           const html = `<ul> ${user.map( u => `<li>firstName: ${u.firstName} ---> email: ${u.email}</li>`).join('')}</ul>`
           return res.status(200).send(html);
      }catch(err){
           return res.status(500).json({msg: "internal server error"});
      }
}

async function getUserById(req, res) {
      try{
      
            const userById   =  await User.findById(req.params.id);
              if(userById){
           return res.status(200).json(userById);
        }
         return res.status(404).json({msg: "User not found"}); 
      }catch(err){
            return res.status(404).json({msg: "Invalid ID format" })
      }
}

async function updateUserById(req, res) {
        try{
            const userById =  await User.findByIdAndUpdate(req.params.id, req.body, { runValidators: true});
            if(userById){
           return res.status(200).json({msg: "user updated"});
        }
         return res.status(404).json({msg: "User not found"}); 
      }catch(err){
            return res.status(404).json({msg: "Invalid ID format" })
      }
}

async function deleteUserById(req, res) {
      try{
            const userById   =  await User.findByIdAndDelete(req.params.id);
            if(userById){
           return res.status(200).json({msg: "user delete"});
        }
         return res.status(404).json({msg: "User not found"}); 
      }catch(err){
            return res.status(404).json({msg: "Invalid ID format" })
      }
}



module.exports = {
  getUserById,
  updateUserById,
  deleteUserById,
  createUser,
  getUser,
};
