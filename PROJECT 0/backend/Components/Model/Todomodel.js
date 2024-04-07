import TodoSchema from "../Schema/TodoSchema.js";
import mongoose from "mongoose";

const TodoModel = (userName) => {
    return mongoose.model(userName, TodoSchema);
  };
  


export default TodoModel