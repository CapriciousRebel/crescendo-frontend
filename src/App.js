import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Upload from "./Components/Upload.js";
import Templates from "./Components/Templates.js";
import Template2D from "./Components/2D.js";
import Template3D from "./Components/3D.js";
import Stems from "./Components/Stems.js";
import MyNavbar from "./Components/Navbar.js";
import Output from "./Components/Output.js";
import Landing from "./Components/Landing.js";

export default function App() {
  return (
    <div className="bgcolor w-100 max-height-100">
      <Router>
        <MyNavbar />
        <Container className="h-90" fluid>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/create" component={Upload} />
            <Route exact path="/stems" component={Stems} />
            <Route exact path="/templates" component={Templates} />
            <Route exact path="/templates/2" component={Template2D} />
            <Route exact path="/templates/3" component={Template3D} />
            <Route exact path="/output" component={Output} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}
