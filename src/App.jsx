import React, {useContext, useState,useEffect} from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import "./App.scss"
import ContextLog from "./context/Contexlog";
import ShopCart from "./Components/MainPage/MainHeader/Navigation/Shop/ShopCart";




function App() {
  const [isShopCart, setShopCart] = useState(false);
  useEffect(() => { 
    if (isShopCart) { 
      document.body.style.overflow = "hidden"; // Блокируем скролл 
    } else { 
      document.body.style.overflow = "auto"; // Восстанавливаем скролл 
    } 
    return () => { 
      document.body.style.overflow = "auto"; 
    }; 
  }, [isShopCart]);

  const onShowCart = () =>{
    setShopCart(true)
  }
  const onCloseCart =() =>{
    setShopCart(false)
  }
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
          {isShopCart && <ShopCart onShowCart={onShowCart} onCloseCart={onCloseCart}/>}
          {!context.isLoggedIn && <Login />}
          {context.isLoggedIn && <Home  onShowCart={onShowCart}/>}
      </div>
    </React.Fragment>
)}

export default App;
