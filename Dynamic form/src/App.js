import React from "react";
import "./styles.css";

// Demo user data for this example to work
const usersData = [
  {
    username: "breakingbird",
    email: "break@bad.com",
    phone: "+254712345678",
    password: "bbad" // Note: Passwords from a server are never stored as strings, they are hashed for security reasons.
  },
  {
    username: "gusfring",
    email: "lospollos@hermanos.com",
    phone: "+254734567890",
    password: "chickenman" // Note: Passwords from a server are never stored as strings, they are hashed for security reasons.
  }
];

export default function App() {
  const [loginMessage, setLoginMessage] = React.useState(() => {
    return window.localStorage.getItem("loginMessage") || {};
  });

  React.useEffect(() => {
    window.localStorage.setItem("loginMessage", loginMessage);
  }, [loginMessage]);

  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // this can get really tricky to validate due to multiple ways the number can be submitted
  // we can enforce a formart on the client form but that can be bypassed. probably best to use a 3rd party provider
  // but since this is a demo let go ahead
  const validatePhone = (phone) => {
    return phone.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
  };

  const loginMethod = (input) => {
    return validateEmail(input) !== null
      ? "email"
      : validatePhone(input) !== null
      ? "phone"
      : "username";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the user login info
    const loginWithInput = String(e.target.elements.loginWithInput.value);
    const passwordInput = String(e.target.elements.passwordInput.value);

    // get login method: email? phone? username?
    const loginWith = loginMethod(loginWithInput);

    // Filter the users
    const getUser = (key) => {
      const result = usersData.filter((user) => {
        if (key === "email") {
          return user.email === loginWithInput;
        } else if (key === "phone") {
          return user.phone === loginWithInput;
        } else {
          return user.username === loginWithInput;
        }
      });
      return result;
    };

    let user;
    loginWith === "email"
      ? (user = getUser("email"))
      : loginWith === "phone"
      ? (user = getUser("phone"))
      : (user = getUser("username"));
    // validate the password
    // this validation is normally done from the backend level.
    if (user.length > 0) {
      user[0].password === passwordInput
        ? setLoginMessage({
            type: "sucess",
            message: "Login successfull, redirecting shortly!"
          })
        : // Do some stuff:
          // Store user token, redirect user to a page etc.
          setLoginMessage({
            type: "error",
            message: "Incorrect login credentials. Try again!"
          });
    } else
      setLoginMessage({
        type: "error",
        message: "No user found! Try creating an account!"
      });
  };
  return (
    <div className="App">
      <div className="LoginForm">
        <h3>Glad to have you back!</h3>
        <p> Please enter your login details to continue</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="loginWithInput">Username, email or password</label>
          <input
            id="loginWithInput"
            type="text"
            placeholder="Username, phone number or email"
            required
          />
          <label htfor="passwordInput">Password</label>
          <input id="passwordInput" type="password" required />
          <button type="submit">Submit</button>
        </form>
        {loginMessage ? (
          <div className={loginMessage.type === "error" ? "error" : "success"}>
            {loginMessage.message}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
