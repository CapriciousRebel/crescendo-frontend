import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { Card, Button } from "@material-ui/core";
import { uploadFile, getFiles } from "../Apis/FileUpload";
import ReactPlayer from "react-player";

const Templates = (props) => {
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
      <h1>Here are your seperated Stems!</h1>
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

      <h1>Choose a Template!</h1>
    </>
  );
};

export default Templates;
