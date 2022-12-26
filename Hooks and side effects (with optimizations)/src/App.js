import React from "react";
import "./styles.css";

export default function App() {
  // initiate state
  const [name, setName] = React.useState(() => {
    // if name exist get it else render empty string
    return window.localStorage.getItem("name") || "";
  });

  // Store value to local browser storage
  // Optimization: Added dependancy array to keep things in sync and prevent unwanted call of this function
  // Consider using https://www.npmjs.com/package/eslint-plugin-react-hooks to ensure dependency array is always up to date
  React.useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <label>Your Name</label>
        <input value={name} onChange={handleChange} />
        <p> My name is {name}</p>
      </form>
    </div>
  );
}
