const userController= require('../controllers/userController')
const express= require('express')

const router= express.Router()

router.get('/', userController.getUser)
router.post('/',userController.postUser)

module.exports= router