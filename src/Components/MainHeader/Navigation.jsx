import React from "react";

import  "./Navigation.scss";
import ContextLog from "../../context/contextlog";

const Navigation = (props) => {
  <ContextLog.Consumer>
      {(ctx) => {
        return(
    <nav className="nav">
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
      );
    }}
  </ContextLog.Consumer>
};

export default Navigation;