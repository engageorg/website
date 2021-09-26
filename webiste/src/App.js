import React from "react";
import Navbar from "./components/nav";
import { MenuProvider, ThemeStateProvider } from "./state";

function App() {
  return (
    <>
      <ThemeStateProvider>
      <Navbar/>
      <div className = "App">
       
      </div>
      </ThemeStateProvider>
    </>
  );
}

export default App;
