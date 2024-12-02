import React, {useState,useEffect} from "react";

const ContextLog = React.createContext({
    isLoggedIn: () =>{},
    onLogout: () =>{},
    onLogin: (email,password) =>{},
})

export const ContextLogProvider = (props) => {
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
    return (<ContextLog.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}>
        {props.children}
    </ContextLog.Provider>)
}

export default ContextLog