import React from "react";

import Navigation from "./Navigation";
import  "./MainHeader.scss";

const MainHeader = () => {

  return (
    <header className="main-header">
      <h1>Ract</h1>
      <Navigation
      />
    </header>
  );
};

export default MainHeader;
