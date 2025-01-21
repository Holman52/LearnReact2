import React from "react";

import  "./ButtonBuy.scss";

const ButtonBuy = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${"button-buy"} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default ButtonBuy