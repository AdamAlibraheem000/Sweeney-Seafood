import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import { LOGIN_USER, CREATE_USER } from "../../utils/mutations";

// import Auth from '../../utils/auth';

export default function Login() {
  const [loginFormState, setLoginFormState] = useState({ email: "", password: "" });
  const [signupFormState, setSignupFormState] = useState({ usename: '', email: '', password: ''});
  const [loginUser, { error }] = useMutation(LOGIN_USER);
  const [createUser, { err }] = useMutation(CREATE_USER);

  const handleLoginChange = (event) => {
    const { name, value } = event.target.value;

    setLoginFormState({
      ...loginFormState,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...loginFormState },
      });
      console.log("data: ", data);
      // Auth.login(data.login.token)
    } catch (e) {
      console.log(e);
    }

    setLoginFormState({
      email: "",
      password: "",
    });
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target.value;
    setSignupFormState({
        ...signupFormState,
        [name]: value
    });
  }
  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createUser({
          variables: { ...signupFormState},
      });
      console.log(data);
      // Create user?
    } catch (e) {
      console.log(e);
    }

    setSignupFormState({
        username: '',
        email: '',
        password: ''
    })
  };

  return (
    <section className="login-section">
      <div className="center-item text-large-purple margin-mobile">Login!</div>

      <div className="padding-top-bot-5">
        <Form className="user-form">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleLoginChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleLoginChange}
            />
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              className="background-purple"
              variant="primary"
              type="submit"
              id="submit"
              onSubmit={handleLogin}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>

      <div className="center-item text-large-purple">Or Signup!</div>

      <div className="padding-top-bot-5">
        <Form className="user-form">
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter Username"
              onChange={handleSignupChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleSignupChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleSignupChange}
            />
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              className="background-purple"
              variant="primary"
              type="submit"
              id="submit"
              onSubmit={handleSignup}
            >
              Signup
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}
