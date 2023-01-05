import "./App.css";
import Logo from "./assets/peer.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="row">
            <div className="Logo">
              <img src={Logo} alt="logo" />
            </div>
            <ul>
              <li>
                <button type="button">Products</button>
              </li>
              <li>
                <button type="button">Industries</button>
              </li>
              <li>
                <button type="button">Learning</button>
              </li>
              <li>
                <button type="button">Pricing</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
