import { Row, Navbar } from "react-bootstrap";
import crescendo_logo from "../images/crescendo-logo.png";

const MyNavbar = () => {
  return (
    <Navbar
      variant="dark"
      style={{ backgroundColor: "#0CB8CF", minHeight: "10vh" }}
    >
      <Navbar.Brand href="/">
        <Row>
          <img
            alt=""
            src={crescendo_logo}
            height="40"
            className="d-inline-block align-top ml-5"
          />
          <h3 className="pl-3 pt-1 m-0 pr-0 py-0">Crescendo</h3>
        </Row>
      </Navbar.Brand>
    </Navbar>
  );
};

export default MyNavbar;
