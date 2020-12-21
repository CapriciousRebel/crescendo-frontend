import React from "react";
import { Row, Col } from "react-bootstrap"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  return (
    <Row className="w-100 h-100">
      <Col xl={6} className="my-auto pl-5">
        <h1 className="mt-5 mb-0 mx-0 p-0 text-left" style={{ color: "#0CB8CF", fontSize: "4rem" }}>Reimagining Music Visualizers!</h1>
        <h3 className="text-left mt-3 mb-4" style={{ color: "white" }}>Fully automated music visualizer to trigger  your visual senses to musical components using engaging animation in VR</h3>
        <div className="d-flex">
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: "#0CB8CF" }}
            onClick={() => { history.push('create') }}
          >Create Video</Button>
        </div>
      </Col>
      <Col xl={6} className="my-auto mx-0 p-0">
        <img
          src="http://localhost:6900/images/music 2.png"
          alt="Loading . . ."
          className="m-0 p-0"
          style={{ width: "800px" }} />
      </Col>
    </Row>
  );
};

export default Landing;
