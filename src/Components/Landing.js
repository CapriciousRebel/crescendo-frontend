import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import music from "../images/music.png";

export default function Landing() {
  const history = useHistory();
  return (
    <Row className="h-100">
      <Col xl={6} className="my-auto p-0">
        <h1 className="intro-heading">Reimagining Music Visualizers!</h1>
        <h3 className="intro-text">
          Fully automated music visualizer to trigger your visual senses to
          musical components using engaging animation in VR
        </h3>
        <div className="d-flex create-button">
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: "#0CB8CF" }}
            onClick={() => {
              history.push("create");
            }}
          >
            Create Video
          </Button>
        </div>
      </Col>
      <Col xl={6} className="my-auto mx-0">
        <img src={music} alt="" className="music-image" />
      </Col>
    </Row>
  );
}
