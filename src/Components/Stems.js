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
            <h1 className="text-white">Here are your seperated Stems!</h1>
          </Col>
          <Col xl={2} className="mt-5 pt-2">
            <Link to="/templates" className="decoration-none">
              <Row>
                <h4 style={{ color: "#0CB8CF" }}>Choose a template</h4>
                <ArrowForwardIcon
                  className="pt-1"
                  style={{ color: "#0CB8CF" }}
                />
              </Row>
            </Link>
          </Col>
        </Row>
        <Row className="px-5">
          {stems.map((stem, index) => (
            <Card
              className="stem-card mt-5 mx-auto d-flex flex-column align-items-center justify-content-around"
              key={index}
              style={{ backgroundColor: "#214D52" }}
            >
              <h3 className="ml-3 pl-3 w-100 text-left text-white">
                {stem.name}
              </h3>
              <ReactPlayer
                url={stem.url}
                width="24rem"
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
