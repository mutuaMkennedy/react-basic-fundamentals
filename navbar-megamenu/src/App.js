import React from "react";
import "./App.css";
import Logo from "./assets/peer.png";

const Navbar = () => {
  const [dropdown, setDropdown] = React.useState(() => {
    return {
      products: "hidden",
      industries: "hidden",
    };
  });

  // helper function to reset dropdown array to default hidden state
  const resetArray = () => {
    let keys = ["products", "industries"];
    let arrayCopy = {
      ...Object.fromEntries(keys.map((key) => [key, "hidden"])),
    };

    return arrayCopy;
  };

  const onMouseEnter = (e) => {
    let arrayCopy = resetArray();
    // display the current dropdown for nav item selected
    arrayCopy[e.target.getAttribute("data-js-target")] = "block";
    setDropdown(arrayCopy);
  };
  const onMouseLeave = (e) => {
    let arrayCopy = resetArray();
    setDropdown(arrayCopy);
  };

  return (
    <header>
      <nav>
        <div className="container">
          <div className="row">
            <div className="Logo">
              <img src={Logo} alt="logo" />
            </div>
            <ul className="menu">
              <li className="menu-item" onMouseLeave={onMouseLeave}>
                <button
                  type="button"
                  data-js-target="products"
                  onMouseEnter={onMouseEnter}
                  data-state={dropdown.products}
                >
                  Products
                </button>
                <div className={`${dropdown.products} dropdown`}>
                  <div className="dropdown-row" onMouseLeave={onMouseLeave}>
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
              <li className="menu-item" onMouseLeave={onMouseLeave}>
                <button
                  type="button"
                  data-js-target="industries"
                  onMouseEnter={onMouseEnter}
                  data-state={dropdown.industries}
                >
                  Industries
                </button>
                <div className={`${dropdown.industries} dropdown`}>
                  <div className="dropdown-row" onMouseLeave={onMouseLeave}>
                    <div className="dropdown-wrapper">
                      <span>Industries</span>
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
