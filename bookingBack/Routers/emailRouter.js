const express=require('express')
const emailController = require('../controllers/emailController')
const route=express.Router()

route.post('/createemail',emailController.createemail)
 route.get('/allemail',emailController.getAllEmail)



module.exports=route;
