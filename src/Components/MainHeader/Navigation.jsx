import React from "react";

import  "./Navigation.scss";

const Navigation = (props) => {
  return (
    <nav className="nav">
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;