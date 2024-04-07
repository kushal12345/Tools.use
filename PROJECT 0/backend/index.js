import express from 'express';
import { json } from 'express';
import cors from 'cors';
import { mongoose } from 'mongoose';
import UserModel from './Components/Model/Usermodel.js';
import Register from './Components/Register/Register.js';
import TodoModel from './Components/Model/Todomodel.js';
import TodoSchema from './Components/Schema/TodoSchema.js';

const PORT = process.env.PORT || 3001;
const app = express();
var userName= "";
app.use(json())
app.use(cors())

//connect to database

mongoose.connect("mongodb://localhost:27017/Registerandlogin")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

 

app.post("/todo",(req,res)=>{
    TodoModel(userName).create(req.body)
    .then(todo=>res.json(todo))
    .catch(err=>res.json(err))
})


app.post("/Register", (req,res)=>{
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
});


app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
              userName = user.name;
                TodoModel(userName);
                res.json({message:"Success",name:user.name, email:user.email})
            }
        }else{
            res.json("no record exists")
        }
    })
    .catch(err=>res.json(err + "error try again"))

})


app.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    return res.redirect('/');
  });



  app.get('/api/todo-home', async (req, res) => {
    try {
      const todos = await TodoModel(userName).find({});
      res.json(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  
  app.get('/api/show-todo/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const todos = await TodoModel.findOne({ id: id });
      res.json(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  


app.get('/api',(req,res)=>{
    res.json({message: "Server Running"})
})
app.listen(PORT, ()=>{
    console.log("Your server is runnig at port: " + PORT)
})

