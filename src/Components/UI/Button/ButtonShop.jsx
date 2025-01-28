import React from "react";

import  "./ButtonShop.scss";

const ButtonShop = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${"btn-shop"} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default ButtonShop