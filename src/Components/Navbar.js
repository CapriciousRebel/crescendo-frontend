import { Row, Navbar } from "react-bootstrap";

const MyNavbar = () => {
    return (
        <Navbar variant="dark" style={{ backgroundColor: "#0CB8CF" }}>
            <Navbar.Brand href="/">
                <Row>
                    <img
                        alt=""
                        src="http://localhost:6900/images/template2.jpeg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> <div className="pl-5">Crescendo</div>
                </Row>
            </Navbar.Brand>
        </Navbar>
    );
};

export default MyNavbar;