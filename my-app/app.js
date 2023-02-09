const express = require('express')
const app= express()
const router = require('./router/app')

const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api',router)


const start = async ()=>{
        try {
          await connectDB(process.env.MONGO_URI)
          app.listen(8000,()=>{
            console.log(`server is listening `)
        })
    
        } catch (error) {
            // handleError(e)
            console.log(error)
        }
    }
    
    start()
