import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { Card, Button } from "@material-ui/core";
import { uploadFile, getFiles } from "../Apis/FileUpload";
import ReactPlayer from "react-player";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Stems = () => {
  const [stems, setStems] = useState([]);
  const startStream = () => {
    getFiles(localStorage.getItem("client_id")).then((response) => {
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
              <h4>Choose a template</h4>
            </Link>
          </Col>
        </Row>
        <Row>
          {stems.map((stem) => (
            <Card className="stem-card mt-5 mx-auto d-flex flex-column align-items-center justify-content-around">
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
