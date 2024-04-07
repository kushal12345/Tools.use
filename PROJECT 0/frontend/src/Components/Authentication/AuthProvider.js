import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [AuthUser, setIsAuthUser] = useState("");
  const [id,setId] = useState(1)


  const login = (name) => {
    setIsAuthenticated(true);
    setIsAuthUser(name)
  };

  const counterid = (id) => {
    var new_id=id+1
    setId(new_id);
  };

  

  const logout = () => {
    setIsAuthenticated(false);
    setIsAuthUser("")

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated,AuthUser, login, logout, counterid ,id }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;