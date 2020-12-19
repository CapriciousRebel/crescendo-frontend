import React, { useState, useEffect } from "react";
import Welcome from "./Components/Welcome.js";
import Templates from "./Components/Templates.js";
import Animation from "./Components/Animation.js";
import Stems from "./Components/Stems.js";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/stems" component={Stems} />
        <Route exact path="/templates" component={Templates} />
        <Route exact path="/animation" component={Animation} />
      </Switch>
    </Router>
  );
}

export default App;
