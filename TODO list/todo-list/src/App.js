import React from 'react';
import Register from './Components/Register/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Home';
import {  useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
    const userName = location.state?.currentUser;
  const [data, setData] = React.useState(null);

  React.useEffect(()=>{
    fetch("/api")
      .then((res)=>res.json())
      .then((data)=>setData(data.message))
  },[]);


  return (
    <div className="App">

      <p>{!data ? 
              "Loading..." 
              
              :
              <div>
                {console.log(data)}
              <BrowserRouter>
              <Routes>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Dashboard userName={userName} />}/>
              </Routes>
            </BrowserRouter>
              </div> 
              }</p>
    </div>
  );
}

export default App;
