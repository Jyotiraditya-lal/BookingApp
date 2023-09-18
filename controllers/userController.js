const User= require('../models/user')
const path= require('path')
const rootDir=require('../util/path')

exports.getUser= (req,res,next) =>{
    res.sendFile( path.join(rootDir, 'views', 'userForm.html'))
};

exports.postUser= async (req,res,next)=> {
    try{
        const name= req.body.title;
        const email= req.body.email;
        const phone= req.body.phone
        console.log(name,email)
        const data= await User.create({ 
            name: name,
            email: email,
            phone: phone
        })
        res.status(201).json({newData: data})
    }
    catch(err){
        console.log(err)
    }
    
}