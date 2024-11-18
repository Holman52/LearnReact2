import React from "react";

import Navigation from "./Navigation";
import  "./MainHeader.scss";

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <h1>React Advanced</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
