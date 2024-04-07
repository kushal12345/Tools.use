import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import Navigation from '../Homepage/Navigation/Navigation';

const Register = () => {
  const navigate = useNavigate();

 /* const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("/api")
      .then((res)=>res.json())
      .then((data)=>setData(data.message))
  },[]);
*/
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email && user.password) {
      axios.post("http://localhost:3001/Register", user)
        .then(res => {
          console.log(res);
          navigate('/login')
        
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert("invalid input");
    }
  }

  return (
    <div className='container'>
       {/* {data} */}
        <Navigation/>
      <form action='#' className='p-5' onSubmit={handleSubmit}>
        <h4>Register</h4>

        <div className='rowa'>
          <input type="text" id='uname' value={user.name} onChange={handleChange} placeholder='User Name' name="name" autoComplete='uname' />
        </div>
        <div className='rowa'>
          <input type="email" id='email' value={user.email} onChange={handleChange} placeholder='Email' name="email" autoComplete='email'/>
        </div>
        <div className='rowa'>
          <input type="password" id="password" value={user.password} onChange={handleChange} placeholder='Password' name="password" autoComplete='current-password' />
        </div>
        <div className='rowa'>
          <button type='submit'>Submit</button>
        </div>
        <p>Already have an account? Please <a href="/Login">Sign in </a></p>
      </form>
    </div>
  );
}

export default Register;