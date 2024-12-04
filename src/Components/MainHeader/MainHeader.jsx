import React from "react";

import Navigation from "./Navigation";
import  "./MainHeader.scss";

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <h1>Ract</h1>
      <Navigation
      />
    </header>
  );
};

export default MainHeader;
