const express = require('express')

const dbconnect = require('./config/dbConnect')


const app = express()
app.use(express.json())
dbconnect();

app.use('/product', require('./Routes/product'))
app.use('/Register',require('./Routes/user'))



const PORT =  4000
app.listen(PORT,(err)=>
err ? console.error(err) : console.log(`🚀 is 🏃 on port ${PORT}`)
)