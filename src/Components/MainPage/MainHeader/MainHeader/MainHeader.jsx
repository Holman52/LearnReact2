import React from "react";


import  "./MainHeader.scss";

import Navigation from "../Navigation/Navigation";
import Banner from "../Banner/Banner";


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
