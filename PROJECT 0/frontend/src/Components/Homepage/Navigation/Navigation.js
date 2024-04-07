import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Authentication/AuthContext';

const Navigation = () => {
  const navigate = useNavigate();
    const { isAuthenticated,logout,AuthUser} = useContext(AuthContext);
    const location = useLocation();
    const { name } = location.state || {};
    
    

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" exact>
          <b>Tools.use</b>
        </NavLink>
       
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" exact>
                Home
              </NavLink>
            </li>

            {isAuthenticated? 
                    <>
                      
                    </>

                    :
                    <>
                        <li className="nav-item">
                        <NavLink to="/login" className="nav-link"  exact>
                            Login
                         </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/register" className="nav-link" exact>
                            Register
                        </NavLink>
                        </li>
                    </>

                    }  
          </ul>
        </div>
        {isAuthenticated? 
            <div className="justify-content-right">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <NavLink className="nav-link" exact>
                      <b>{AuthUser}</b>
                  </NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/Logout"  className="nav-link" onClick={logout} exact>
                      Logout
                  </NavLink>
                  </li>
              </ul>

        </div>
        :
        <>
        
        </>

        }    
             
       
      </div>
    </nav>
  );
};

export default Navigation;