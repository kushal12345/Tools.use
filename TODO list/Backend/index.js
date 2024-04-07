import express, { json } from "express";
import { mongoose } from "mongoose";
import cors from "cors";
import EmployeeModel from "./Model/Employee.js"


//import path from 'path';
//import { dirname } from 'path';


const PORT = process.env.PORT || 3001;

const app  = express();
app.use(json())
app.use(cors())

mongoose.connect("mongodb+srv://kushal:Kushal123@todo-list.48ufcwm.mongodb.net/");


app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user=>{
        if(user) {
            if(user.password === password){
                res.json({message:"Success", name:user.name, email})
            }else{
                res.json("The Password is Incorrect")
            }
        }else{
            res.json("No record name exists")
        }
    })
    

})


app.post("/register",(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err=>res.json(err))
})




// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../todo-list/build')));

app.get("/api", (req,res)=>{
    res.json({message: "Server running"});
});

// All other GET requests not handled before will return our React app
/*app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../todo-list/build', 'index.html'));
  });
*/
app.listen(PORT, ()=>{
    console.log("Your server is running at port: " + PORT);
});