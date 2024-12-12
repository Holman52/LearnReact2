import React, {useContext} from "react";
import ContextLog from "../../../../context/Contexlog";
import './Navigation.scss'
import buy from '../../../../img/buy.svg'
import logo from '../../../../img/logo.png'
import user from '../../../../img/user.svg'

const Navigation = (props) => {
   const ctx = useContext(ContextLog)
        return(
    <nav className="nav">
        <div class="navigation__logo">
                <div class="logo__icon"><img src={logo} alt="logo"/></div>
                <div class="logo__text navigation" >Delivery Food</div>
            </div>
            <div class="navigation__search">
                <div class="icon-search"></div>
                <input type="search" class="address" placeholder="Адрес доставки" />
            </div>
            <div class="servis">
                <button class="login__button" onClick={ctx.onLogout}>
                    <div class="user-icon"><img src={user} alt="logo"/></div>
                    <div class="login-user">Войти </div>
                </button>
                <button class="login__buy">
                    <div class="buy-icon"><img src={buy} alt="logo"/></div>
                    <div class="buy-text">Корзина</div>
                </button>
            </div>
    </nav>
      );
};

export default Navigation;