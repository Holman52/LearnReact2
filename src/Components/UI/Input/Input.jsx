import React from "react";

const Input = (props) =>{
   return ( <React.Fragment>
        <input id={props.id} type={props.type} value={props.value}></input>
    </React.Fragment>
)}

export default Input