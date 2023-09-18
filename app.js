const express= require('express')
const bodyParser=require('body-parser')
const user= require('./routes/userRoutes')
const path=require('path')
const sequelize = require('./util/database')

const app= express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(user)

app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync().then(result=>{
    app.listen(3000)
}).catch(err=>{
    console.log(err)
})