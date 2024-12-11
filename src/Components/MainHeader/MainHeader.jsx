import React from "react";

import Navigation from "./Navigation";
import  "./MainHeader.scss";
import Banner from "./Banner";


const MainHeader = () => {

  return (
    <React.Fragment>
    <header className="main-header">
       <Navigation />
    </header>
    <main className="advertising">
       <Banner/>
    </main>
    </React.Fragment>
  );
};

export default MainHeader;
