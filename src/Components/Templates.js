import React from "react";
import { Container, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const Templates = () => {
    const history = useHistory();

    const handle2D = () => {
        history.push("templates/2");
    };

    const handle3D = () => {
        history.push("templates/3");
    };

    return (
        <Container fluid className="m-0 px-0 pb-0 pt-0 h-100 w-100">
            <Row className="mx-auto py-auto">
                <h1 className="mx-auto text-white mt-5">Choose a template!</h1>
            </Row>
            <hr className="mt-2 mb-3" />
            <Row
                className="d-flex mt-69 align-items-center justify-content-around"
                style={{ marginLeft: '15rem', marginRight: "15rem" }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handle2D}
                    className="my-5"
                    size="large"
                >
                    2D Template
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handle3D}
                    className="my-5"
                    size="large"
                >
                    3D Template
            </Button>
            </Row>
        </Container>
    );
};

export default Templates;
