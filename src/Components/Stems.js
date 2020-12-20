import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Card } from "@material-ui/core";
import ReactPlayer from "react-player";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { getFiles } from "../Apis/FileUpload";

const Stems = () => {
  const [stems, setStems] = useState([]);

  const startStream = () => {
    getFiles(
      localStorage.getItem("client_id"),
      localStorage.getItem("output_folder")
    ).then((response) => {
      setStems(response.data);
    });
  };

  useEffect(() => {
    startStream();
  }, []);

  return (
    <>
      <Col>
        <Row>
          <Col xl={2}></Col>
          <Col xl={8} className="mt-5">
            <h1>Here are your seperated Stems!</h1>
          </Col>
          <Col xl={2} className="mt-5  pt-2">
            <Link to="/templates" className="decoration-none">
              <Row>
                <h4>Choose a template</h4>
                <ArrowForwardIcon className="pt-1" />
              </Row>
            </Link>
          </Col>
        </Row>
        <Row>
          {stems.map((stem, index) => (
            <Card
              className="stem-card mt-5 mx-auto d-flex flex-column align-items-center justify-content-around"
              key={index}
            >
              <h5>{stem.name}</h5>
              <ReactPlayer
                url={stem.url}
                width="20rem"
                height="3rem"
                playing={false}
                controls={true}
              />
            </Card>
          ))}
        </Row>
      </Col>
    </>
  );
};

export default Stems;
