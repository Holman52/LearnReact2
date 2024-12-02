import React, { useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";
import "./App.scss"
import ContextLog from "./context/Contextlog";

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
    <ContextLog.Provider 
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler 
    }}>
      <div className="container">
        <MainHeader  onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler}/>}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </div>
    </ContextLog.Provider>
  );
}

export default App;
