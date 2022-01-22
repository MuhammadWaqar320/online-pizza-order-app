// here i am importing packages
import  Express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import  Mongoose  from "mongoose";

// creating App
const App=Express()
const Cors=cors()
// App use goes here
App.use(bodyParser.json({limit:"30mb",extended:true}))
App.use(bodyParser.urlencoded({extended:true}))
App.use(Cors)
// database connection
const connection_string='mongodb+srv://waqar:1234@pizzaorderwebapp.hxj1t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT=process.env.PORT||8000
Mongoose.connect(connection_string,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    App.listen(PORT,()=>{
        console.log(`Node.js  Server is running on PORT ${PORT}`)
    })
}).catch((error)=>
{
    console.log(error.message);
})