import React, {useEffect, useState} from "react";


const ContextLog = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    inLogin: () => {}
})

export default ContextLog

export const ContextProvider = (props) =>{
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
                onLogout: logoutHandler,
                inLogin: loginHandler
            }}
        >
            {props.children}
        </ContextLog.Provider>
    )
}