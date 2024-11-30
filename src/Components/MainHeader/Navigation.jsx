import React, {useContext} from "react";

import  "./Navigation.scss";
import ContextLog from "../../context/Contextlog";

const Navigation = (props) => {
  const ctx = useContext(ContextLog)
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
    }
export default Navigation;