import React, { useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import  "./Login.scss";
import Button from "../UI/Button/But";
import ContextLog from "../../context/ContextLog";


const emailReducer = (prevState, action) => {
  if (action.type === "USER_INPUT"){
    return {
    value: action.value,
    isValid: action.value.includes("@")
    }
  };
  if (action.type === "INPUT_VALID"){
    return{
      value: prevState.value,
      isValid: prevState.value.includes('@')
    }
  }
  return {
    value: '',
    isValid: false
  }
  }

const passwordReducer = (prevState, action) =>{
  if (action.type === "USER_INPUT"){
    return {
    value: action.value,
    isValid: action.value.trim().length > 7
    }
  };
  if (action.type === "INPUT_VALID"){
    return{
      value: prevState.value,
      isValid: prevState.value.trim().length > 7
    }
  };
  return {
    value: '',
    isValid: false
  }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [statePassword, dispatchStatePassword] = useReducer(passwordReducer, {value: '' , isValid: false})
  const [EmailInput,dispatchEmailInput] = useReducer(emailReducer, {value: '' , isValid: false})
  const context = useContext(ContextLog)
  const emailChangeHandler = (event) => {
    dispatchEmailInput({type: "USER_INPUT", value: event.target.value});

    setFormIsValid(
      event.target.value.includes("@") && statePassword.value
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchStatePassword({type: "USER_INPUT" , value: event.target.value});

    setFormIsValid(
      event.target.value.trim().length > 6 && EmailInput.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmailInput({type: "INPUT_VALID"});
  };

  const validatePasswordHandler = () => {
    dispatchEmailInput({type: "INPUT_VALID"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    context.inLogin(EmailInput.value, statePassword.value);
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <div
          className={`${"control"} ${
            EmailInput.isValid === false ? "invalid" : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={EmailInput.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${"control"} ${
            statePassword.isValid === false ? "invalid" : ""
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={statePassword.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className="actions">
          <Button type="submit" className="btn" disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;