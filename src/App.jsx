import React, {useContext} from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

import "./App.scss"
import ContextLog from "./context/Contexlog";
import MainHeader from "./Components/MainPage/MainHeader/MainHeader/MainHeader";



function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  // useEffect(() => {
    
  //   const local = localStorage.getItem("user")
  //   if (local === 'пользователь зарегистрирован'){
  //     setIsLoggedIn(true)
  //   }

  // }, []);
  
  // const loginHandler = (email, password) => {
  //   localStorage.setItem("user" , "пользователь зарегистрирован")
  //   setIsLoggedIn(true);

  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('user' , 'пользователь зарегистрирован')
  //   setIsLoggedIn(false);
  // };
  const context = useContext(ContextLog)
  return (
    <React.Fragment>
      <div className="container">
       {context.isLoggedIn && <MainHeader />}
        <main>
          {!context.isLoggedIn && <Login />}
          {context.isLoggedIn && <Home  />}
        </main>
      </div>
    </React.Fragment>
)}

export default App;
