import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import {Navigate} from 'react-router-dom'
import FeatureUpdate from './FeatureUpdate.js';


function Login({currentPage, handlePageChange}) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
      return <Navigate to="/FeatureUpdate"></Navigate>
    } catch (e) {
      console.log(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="login-form">
        <h4>Login</h4>
        <div>
          <form onSubmit={handleFormSubmit}>
            <input
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              placeholder="******"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button type="submit" >Submit</button>
          </form>
          {error && <div>Login failed</div>}
        </div>
      </div>
    </>
  );
}

export default Login;
