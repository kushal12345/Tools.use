import React,{useContext} from 'react'
import { useLocation } from 'react-router-dom';
import DasboardL from './Branches/DashboardforLoggedin';
import DasboardNL from './Branches/Dashboardfornotlogged';
import AuthContext from '../Authentication/AuthContext';

function Homepage () {
    const location = useLocation();
    const { name } = location.state || {};
    const { isAuthenticated,logout} = useContext(AuthContext);

    return (
        <>
                {isAuthenticated? 
                <>            
                    <DasboardL/>
                </>
                : 
                <>
                    <DasboardNL/>
                </>
                }
            
            
          
            
        </>
    )
}
export default Homepage