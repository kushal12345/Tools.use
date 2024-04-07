import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Perform any necessary logout logic here, such as clearing the session
        localStorage.clear();
        sessionStorage.clear();

        // Navigate to the login page after the component has been rendered
        navigate('/login');
    }, []);

    // The component should not render any UI
    return null;
}

export default Logout;