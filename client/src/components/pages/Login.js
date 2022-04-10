import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function Login() {
  return (
    <>
      <FadeIn>
        <div>
          <form class="login-form">
            <div>
              <label for="email">email:</label>
              <input type="text" id="email-log" />
            </div>
            <div>
              <label for="password">password:</label>
              <input type="password" id="password-log" />
            </div>
            <button type="submit" class="login-btn"></button>
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
      </FadeIn>
      <script src="../client/public/js/login.js"></script>
    </>
  );
}
