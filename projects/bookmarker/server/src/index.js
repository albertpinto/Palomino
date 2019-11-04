const express = require("express")
require('./db/mongoose')
//const User = require('./models/user')
//const Task = require('./models/Task')

const userRouter =require("./db/routers/user")

const taskRouter =require("./db/routers/task")

//setting up express as an app
const app = express()

//setting up the port, defaults to 3000 if the env value is not setup
const port = process.env.port || 3000
//setup express to handle JSON

app.use(express.json())
// make the app listen at the port

// Register the Express router
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up at port:' + port)
})

// const bcryptjs =require("bcryptjs")

// const myfunction = async ()=>{
//     try{
//     const password ="albert123"
//     const hashpassword = await bcryptjs.hash(password,8)
//     console.log ("password:" + password)
//     console.log ("Hash password:" + hashpassword)
//     const imatch =await bcryptjs.compare(password, hashpassword)
//     console.log ("Does the password match:" + imatch)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// myfunction()
