import React from "react";


import  "./Home.scss";
import MainHeader from "../MainPage/MainHeader/MainHeader/MainHeader";

const Home = (props) => {
  return (
    <React.Fragment>
      <MainHeader onShowCart={props.onShowCart}/>
    </React.Fragment>
  );
};
 
export default Home;