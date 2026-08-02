const express = require('express');
const router = express.Router();
const   { handlerCreateUser, handlerdeleteUser , handlerUpdateUser , handleFetchUser, handlerFetchUserById  }  = require("../controllers/userHandler")


router.route('/')
      .get(handleFetchUser)
      .post(handlerCreateUser)
router.route('/:id')
      .get(handlerFetchUserById)
      .patch(handlerUpdateUser)
      .delete(handlerdeleteUser)


      
module.exports = router;