import "./App.css";
import Button from "./Button.js";
import Input from "./Input.js";

function App() {
  return (
    <div className="App">
      <Button value="Click to increment by a factor of 5" />
      <Input placeholder="Type to increment by a factor 10" />
    </div>
  );
}

export default App;
