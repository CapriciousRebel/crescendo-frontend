import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import crescendo_logo from "../images/crescendo-logo.png";

export default function Navbar() {
  return (
    <Container
      style={{ backgroundColor: "#0CB8CF" }}
      className="h-10 pl-5"
      fluid
    >
      <Row className="h-100 d-flex">
        <Col xs={2} className="pr-0 align-self-center justify-self-center">
          <img alt="" src={crescendo_logo} height="40" width="40" />
        </Col>
        <Col xs={10} className="align-self-center navbar-title-col">
          <h3 className="navbar-title">Crescendo</h3>
        </Col>
      </Row>
    </Container>
  );
}
