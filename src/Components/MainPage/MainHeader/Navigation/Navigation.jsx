import React, {useContext} from "react";
import ContextLog from "../../../../context/Contexlog";
import './Navigation.scss'

const Navigation = (props) => {
   const ctx = useContext(ContextLog)
        return(
    <nav className="nav">
        <div className="navigation__logo">
                <div className="logo__icon"><img src={'/logo.png'} alt="logo"/></div>
                <div className="logo__text navigation" >Delivery Food</div>
            </div>
            <div className="navigation__search">
                <div className="icon-search"></div>
                <input type="search" className="address" placeholder="Адрес доставки" />
            </div>
            <div className="servis">
                <button className="login__button" onClick={ctx.onLogout}>
                    <div className="user-icon"><img src={'/user.svg'} alt="logo"/></div>
                    <div className="login-user">Выйти </div>
                </button>
                <button className="login__buy">
                    <div className="buy-icon"><img src={'/buy.svg'} alt="logo"/></div>
                    <div className="buy-text" onClick={props.onShowCart}>Корзина</div>
                </button>
            </div>
    </nav>
      );
};

export default Navigation;