import React, { useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";
import "./App.scss"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    
    const local = localStorage.getItem("user")
    if (local === 'пользователь зарегистрирован'){
      setIsLoggedIn(true)
    }

  }, []);
  
  const loginHandler = (email, password) => {
    localStorage.setItem("user" , "пользователь зарегистрирован")
    setIsLoggedIn(true);

  };

  const logoutHandler = () => {
    localStorage.removeItem('user' , 'пользователь зарегистрирован')
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </div>
  );
}

export default App;
