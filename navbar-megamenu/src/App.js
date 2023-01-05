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
            <ul className="menu">
              <li className="menu-item">
                <button type="button">Products</button>
                <div className="dropdown">
                  <div className="dropdown-row">
                    <div className="dropdown-wrapper">
                      <span>Products</span>
                      <ul>
                        <li>
                          <span>
                            <iconify-icon
                              icon="logos:salesforce"
                              width="24"
                            ></iconify-icon>
                          </span>
                          Salesforce
                        </li>
                        <li>
                          <span>
                            <iconify-icon
                              icon="logos:slack-icon"
                              width="24"
                            ></iconify-icon>
                          </span>
                          Slack
                        </li>
                        <li>
                          <span>
                            <iconify-icon
                              icon="logos:jira"
                              width="24"
                            ></iconify-icon>
                          </span>
                          Jira
                        </li>
                        <li>
                          <span>
                            <iconify-icon
                              icon="vscode-icons:file-type-reactjs"
                              width="24"
                            ></iconify-icon>
                          </span>
                          React
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-item">
                <button type="button">Industries</button>
              </li>
              <li className="menu-item">
                <button type="button">Learning</button>
              </li>
              <li className="menu-item">
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
