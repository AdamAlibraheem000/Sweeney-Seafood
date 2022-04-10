async function loginHandler(e) {
  e.preventDefault();

  const email = document.querySelector("#email-log").value.trim();
  const password = document.querySelector("password-log").value.trim();

  if (email && password) {
  }
}

async function signupHandler(e) {
  e.preventDefault();

  const username = document.querySelector("username-signup");
  const email = document.querySelector("email-signup");
  const password = document.querySelector("password-signup");

  if (username && email && password) {
  }
}

document.querySelector(".login-form").addEventListener("submit", loginHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupHandler);
