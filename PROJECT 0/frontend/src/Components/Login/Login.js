import React, {useState, useContext} from "react";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import "./Style/Style.css"
import Navigation from "../Homepage/Navigation/Navigation";
import AuthContext from "../Authentication/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { login,logout} = useContext(AuthContext);



    const[user,setUser] = useState({
        email:"",
        password:""
    })

    const [showAlert, setShowAlert] = useState(false);


    const handleChange = (e) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login",user)
        .then(res=>{
            setShowAlert(true)
            if( res.data.name !== undefined)
            {
                setUser({
                name: res.data.name,
                email: res.data.email
                });
                login(res.data.name)
                    
                
                navigate('/',{
                    state: {
                        name: res.data.name,
                        email: res.data.email
                    }
                })
            }    
            
        })
        .catch(err => {
            console.error(err);
            logout();
          });
    }

 return(
    <>
         
        <div className="container login">
            <Navigation/>
            <div className="container">
                <form action="#" autoComplete="off" className="p-5" >
                {showAlert && <Alert variant="success">{
                            showAlert? "Login successful!" : "Login failed!"
                        }</Alert>}
                    <div>
                        <h4>Log In </h4>
                        <p><input  type="email" id="email" placeholder="Enter Your Email" name="email" autoComplete='email' value={user.email} onChange={handleChange} /></p>
                        
                    </div>
                    <div >
                        <p><input  type="password" id="password" placeholder="Enter Your Password" autoComplete='current-password'  name="password" value={user.password} onChange={handleChange}/></p>
                    </div>
                    <div >
                        <button  type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                    <p>Don't Have an Account? Please <a href="/Register">Register</a></p>
                </form>
            </div>
           
        </div>
    </>
 )
}

export default Login;
