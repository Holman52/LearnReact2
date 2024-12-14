import React, {useContext} from "react";
import ContextLog from "../../../../context/Contexlog";
import './Navigation.scss'

const Navigation = (props) => {
   const ctx = useContext(ContextLog)
        return(
    <nav className="nav">
        <div class="navigation__logo">
                <div class="logo__icon"><img src={'/logo.png'} alt="logo"/></div>
                <div class="logo__text navigation" >Delivery Food</div>
            </div>
            <div class="navigation__search">
                <div class="icon-search"></div>
                <input type="search" class="address" placeholder="Адрес доставки" />
            </div>
            <div class="servis">
                <button class="login__button" onClick={ctx.onLogout}>
                    <div class="user-icon"><img src={'/user.svg'} alt="logo"/></div>
                    <div class="login-user">Выйти </div>
                </button>
                <button class="login__buy">
                    <div class="buy-icon"><img src={'/buy.svg'} alt="logo"/></div>
                    <div class="buy-text">Корзина</div>
                </button>
            </div>
    </nav>
      );
};

export default Navigation;