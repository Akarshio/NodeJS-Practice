const express = require('express');
const {getUserById,
       updateUserById, 
       deleteUserById, 
       getUser,
       createUser,
    } = require('../controllers/user.js')

const router = express.Router();




router.route('/').get(getUser).post(createUser);
router.route('/:id').delete(deleteUserById).get(getUserById).patch(updateUserById)


module.exports = {
    router,
}