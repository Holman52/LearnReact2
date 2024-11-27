import React, { useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import  "./Login.scss";
import Button from "../UI/Button/Button";

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



const Login = (props) => {
  const [inputPassword, setInputPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const [EmailInput,dispatchEmailInput] = useReducer(emailReducer, {value: '' , isValid: false})

  const emailChangeHandler = (event) => {
    dispatchEmailInput({type: "USER_INPUT", value: event.target.value});

    setFormIsValid(
      event.target.value.includes("@") && inputPassword.trim().length > 7
    );
  };

  const passwordChangeHandler = (event) => {
    setInputPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && EmailInput.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmailInput({type: "INPUT_VALID"});
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(inputPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(EmailInput.value, inputPassword);
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
            passwordIsValid === false ? "invalid" : ""
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={inputPassword}
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