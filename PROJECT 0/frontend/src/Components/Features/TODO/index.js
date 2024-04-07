import Headers from "./Header";
import Bodys from "./Body";
import "./Style/Style.css"
import Navigation from "../../Homepage/Navigation/Navigation";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React,{useContext} from "react";
import AuthContext from "../../Authentication/AuthContext";
import { useEffect } from "react";




function Home(){
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { name: name } = state || {};
    const { isAuthenticated} = useContext(AuthContext);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/Login");
        }
    }, [isAuthenticated, navigate]);



return(
    <div className="container mainbody">
    {isAuthenticated?
        <>
            <Navigation/>
            <Bodys/>
        </>
        :
        <>
           <div>Redirecting to login page...</div>
        </>

        }
        
    </div>
)
}

export default Home;