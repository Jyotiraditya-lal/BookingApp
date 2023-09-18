const userController= require('../controllers/userController')
const express= require('express')

const router= express.Router()

router.get('/', userController.getUser)
router.post('/get-user',userController.postUser)
router.get('/get-user',userController.getUserData)
router.delete('/delete-user/:userId',userController.deleteUserData)


module.exports= router