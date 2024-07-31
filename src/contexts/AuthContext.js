import React, { createContext, useState, useContext,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const AuthContext = createContext(null);

export const AuthProvider = ({ children, user , login,setUser}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [exemptedUrl,setExemptedUrl] = useState(['/login','/register'])
  // const [user, setUser] = useState(user);
  const currentPage = location.pathname
 useEffect(()=>{
  if( user === null && !exemptedUrl.includes(currentPage)){
    navigate('/login')
  } 
 },[user])



  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
