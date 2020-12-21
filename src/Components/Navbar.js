import { Row, Navbar } from "react-bootstrap";

const MyNavbar = () => {
    return (
        <Navbar variant="dark" style={{ backgroundColor: "#0CB8CF", minHeight: '10vh' }}>
            <Navbar.Brand href="/">
                <Row>
                    <img
                        alt=""
                        src="http://localhost:6900/images/template2.jpeg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top ml-2"
                    />
                    <h3 className="pl-5 m-0 pr-0 py-0">Crescendo</h3>
                </Row>
            </Navbar.Brand>
        </Navbar>
    );
};

export default MyNavbar;