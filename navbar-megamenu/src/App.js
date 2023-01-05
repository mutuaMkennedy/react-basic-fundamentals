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
                <div className="dropdown">
                  <div className="dropdown-wrapper">
                    <span>Products</span>
                    <ul>
                      <li><iconify-icon icon="logos:salesforce"></iconify-icon>Salesforce</li>
                      <li><iconify-icon icon="logos:slack-icon"></iconify-icon>Slack</li>
                      <li><iconify-icon icon="logos:jira"></iconify-icon>Jira</li>
                      <li><iconify-icon icon="vscode-icons:file-type-reactjs"></iconify-icon>React</li>
                    </ul>
                  </div>
                </div>
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
