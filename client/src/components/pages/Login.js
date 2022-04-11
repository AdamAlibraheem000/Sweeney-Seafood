import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import FadeIn from "react-fade-in/lib/FadeIn";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <>
      <div>
        <form class="login-form" onSubmit={handleFormSubmit}>
          <div>
            <label for="email">email:</label>
            <input type="text" id="email-log" onChange={handleChange} />
          </div>
          <div>
            <label for="password">password:</label>
            <input type="password" id="password-log" onChange={handleChange} />
          </div>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div>
            <button type="submit" class="login-btn"></button>
          </div>
        </form>
        <form class="signup-form">
          <div>
            <label for="username">username:</label>
            <input type="text" id="username-signup" />
          </div>
          <div>
            <label for="email">email:</label>
            <input type="text" id="email-signup" />
          </div>
          <div>
            <label for="password">password:</label>
            <input type="password" id="password-signup" />
          </div>
          <button type="submit" class="signup-btn"></button>
        </form>
      </div>
    </>
  );
}

export default Login;
