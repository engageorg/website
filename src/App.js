import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { MenuProvider, ThemeStateProvider } from "./state";
import Navbar from "./components/nav";
import Landing from "./components/landing/index"
import About from "./About";

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Cuprum', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg);
    color: var(--text);
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
 
  a {
    text-decoration: none;
  }

  .landing {
    position : relative;
    top : 15vh;
  }
`;

const App = () => {
  return (
    <Router>
      <ThemeStateProvider>
      <div className="App">
        <GlobalStyle />
        <MenuProvider>
          <Navbar className = "nav"/>
        </MenuProvider>
        < Landing/>
        
      </div>
      </ThemeStateProvider>
    </Router>
  );
};

export default App;
