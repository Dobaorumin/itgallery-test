import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/login";
import { isDisabled } from "../../helpers/isDisabled";

export const LoginScreen = () => {

    
    const dispatch = useDispatch()

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });


  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(login(email))
    
  };



  const disabled = isDisabled(email, password);

  return (
    <>
      <h3 className="login__title">Login</h3>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className="login__input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        ></input>
        <input
          autoComplete="off"
          className="login__input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        ></input>
        <button className="btn btn-primary btn-block" disabled={disabled} type="submit">
          Login
        </button>
      </form>
    </>
  );
};
