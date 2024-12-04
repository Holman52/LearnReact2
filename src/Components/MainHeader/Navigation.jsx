import React, {useContext} from "react";

import  "./Navigation.scss";
import ContextLog from "../../context/ContextLog";


const Navigation = (props) => {
  const context = useContext(ContextLog)
  // <ContextLog.Consumer>
  //     {(context) => {
        return(
    <nav className="nav">
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
      );
};

export default Navigation;