import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SiteList from "./components/SiteList";
import SiteDetail from "./pages/SiteDetail";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/main.css";
function App() {
  const [ user,setUser] = useState(null)
  const login = (email, password) => {
     setUser({ email }); 
  };

  const register = (email, password) => {
    if (!email.trim()){
      return false
    }
    setUser({ email });  
 };

  return (
    <Router>
      <AuthProvider user = {user} login ={login} setUser={setUser}>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" element={<Login  login ={login} />} />
              <Route path="/register" element={<Register register ={register} />} />
              <Route path="/sites" element={<SiteList />} />
              <Route path="/sites/:id" element={<SiteDetail />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
