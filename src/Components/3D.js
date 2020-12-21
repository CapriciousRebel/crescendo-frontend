import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import { useHistory } from "react-router-dom";

import ControlledOpenSelect from "./Dropdown";
import { chooseTemplate } from "../Apis/Templates.js";
import water3d from "../images/water3d.gif"
import scale3d from "../images/scale3d.gif"
import particle3d from "../images/particles3d.gif"


const Template3D = () => {
    const history = useHistory();

    const [finalData, setFinalData] = useState({
        scale: "",
        water: "",
        particles: "",
    });

    const handleSubmit = () => {
        finalData.client_id = localStorage.getItem("client_id");
        finalData.output_folder = localStorage.getItem("output_folder");
        console.log(finalData);
        chooseTemplate(finalData)
            .then((response) => {
                console.log(response)
            });
        history.push("output");
    };

    const handleChangeCallBack = (type, stem) => {
        let newFinalData = finalData;
        newFinalData[type] = stem;
        setFinalData(newFinalData);
    };

    return (
        <Container fluid className="m-0 px-0 pb-0 pt-0">
            <Row className="mx-auto py-auto">
                <h1 className="mx-auto mt-4 mb-4 text-white">Choose components for animation</h1>
            </Row>
            <Row className="mt-0 mx-0">
                <Col className="mt-0">
                    <Row className="mx-0 mt-0">
                        <Col className="mt-0">
                            <div className="embed-responsive embed-responsive-16by9 width-50 mx-auto mt-0">
                                <iframe
                                    title="sample video 1"
                                    className="embed-responsive-item"
                                    src="https://player.vimeo.com/video/493341739"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <Row className="mx-0 mt-3">
                                <Col xl={4}>
                                    <Card className="template-card mx-auto">
                                        <CardMedia
                                            className="card-image"
                                            image={scale3d}
                                            title="Contemplative Reptile"
                                        /><h3>Scale</h3>
                                        <CardActions>
                                            <ControlledOpenSelect
                                                type="scale"
                                                changeCallback={handleChangeCallBack}
                                            />
                                        </CardActions>
                                    </Card>
                                </Col>
                                <Col xl={4}>
                                    <Card className="template-card mx-auto">

                                        <CardMedia
                                            className="card-image"
                                            image={particle3d}
                                            title="Contemplative Reptile"
                                        /><h3>Particle effect</h3>

                                        <CardActions>
                                            <ControlledOpenSelect
                                                type="water"
                                                changeCallback={handleChangeCallBack}
                                            />
                                        </CardActions>
                                    </Card>
                                </Col>
                                <Col xl={4}>
                                    <Card className="template-card mx-auto">

                                        <CardMedia
                                            className="card-image"
                                            image={water3d}
                                            title="Contemplative Reptile"
                                        />
                                        <h3>Wave </h3>

                                        <ControlledOpenSelect
                                            type="particles"
                                            changeCallback={handleChangeCallBack}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className="mb-0 mt-4"
            >
                Submit!
      </Button>
        </Container>
    );
};

export default Template3D;
