import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from "./Components/Homepage/Homepage"
import Login from "./Components/Login/Login"
import Register from './Components/Register/Register';
import Logout from './Components/Logout/Logout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Features/TODO';
import DashboardTodo from './Components/Features/TODO/Dashboard/Dashboardtodo';
import ShowTodo from './Components/Features/TODO/Dashboard/ShowTodo.js';

function App() {


  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Homepage />}/>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="todo-home" element={<Home />} />
          <Route path="todo-dash" element={<DashboardTodo />} />
          <Route path="/show-todo/:id" element={<ShowTodo />} />


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;