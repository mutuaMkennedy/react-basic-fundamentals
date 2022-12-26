import React from "react";
import "./styles.css";

export default function App() {
  const [username, setUsername] = React.useState(() => {
    return window.localStorage.getItem("name") || "";
  });

  const usernameInputRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // method one: from the event
    const username = e.target.usernameInput.value;
    // method  using React.useRef()
    // const username = usernameInputRef.current.value;

    setUsername(username);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">Username</label>
        <input ref={usernameInputRef} id="usernameInput" />
        <button type="submit">Submit</button>
      </form>
      <p style={{ color: "red" }}>
        {" "}
        Welcome {username}, you'll be redirected shortly!
      </p>
    </div>
  );
}
