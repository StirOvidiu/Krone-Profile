import React from "react";
import Landing from "./components/landing-page/landing-page";
import Despre from "./components/despre-noi/despre-noi";
import Contact from "./components/contact/contact";
import { Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/desprenoi" component={Despre} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
