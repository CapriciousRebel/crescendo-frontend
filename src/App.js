import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Components/Welcome.js";
import Templates from "./Components/Templates.js";
import Stems from "./Components/Stems.js";
import Output from "./Components/Output.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/stems" component={Stems} />
        <Route exact path="/templates" component={Templates} />
        <Route exact path="/output" component={Output} />
      </Switch>
    </Router>
  );
}

export default App;
