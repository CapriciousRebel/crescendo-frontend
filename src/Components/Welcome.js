import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { Card, Button } from "@material-ui/core";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { uploadFile, getFiles } from "../Apis/FileUpload";

const Welcome = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];
    setProgress(0);
    setCurrentFile(currentFile);

    uploadFile(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        localStorage.setItem("client_id", response.data.client_id);
        history.push("stems");
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  useEffect(() => {
    //getFiles().then((response) => {
    // setFileInfos(response.data);
    //});
  }, []);
  return (
    <>
      <Container fluid className=" mx-0 w-100">
        <h1 className="mt-5">Welcome to Crescendo!</h1>
        <Card className="upload-card mt-5 px-5 mx-auto">
          <h3 className="mt-5">Upload an audio file to proceed</h3>

          {currentFile && (
            <div className="progress mt-6">
              <div
                className="progress-bar progress-bar-info progress-bar-striped"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progress + "%" }}
              >
                {progress}%
              </div>
            </div>
          )}

          <label className="btn btn-default">
            <input type="file" onChange={selectFile} />
          </label>

          <Button
            variant="contained"
            color="default"
            disabled={!selectedFiles}
            onClick={upload}
            className="w-7rem"
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
          <div className="alert alert-light" role="alert">
            {message}
          </div>

          {progress === 100 ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Processing File ...
            </Button>
          ) : (
            <> </>
          )}
        </Card>
      </Container>
    </>
  );
};

export default Welcome;
