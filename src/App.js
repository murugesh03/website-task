import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import NavBar from "./components/NavBar/NavBar";
import MainArea from "./components/MainArea/MainArea";
import Tabs from "./components/Tabs/Tab";
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainArea />
      <Tabs />
    </div>
  );
}

export default App;
