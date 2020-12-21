import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Components/Welcome.js";
import Templates from "./Components/Templates.js";
import Stems from "./Components/Stems.js";
import MyNavbar from "./Components/Navbar.js"
import Output from "./Components/Output.js";
import Landing from "./Components/Landing.js";

function App() {
  return (
    <div className="bgcolor w-100 max-height-100">
      <Router>
        <MyNavbar className="h-10" />
        <div className="h-90">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/create" component={Welcome} />
            <Route exact path="/stems" component={Stems} />
            <Route exact path="/templates" component={Templates} />
            <Route exact path="/output" component={Output} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
