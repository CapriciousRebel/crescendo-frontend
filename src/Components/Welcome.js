import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Form, Spinner } from "react-bootstrap";
import { Card, Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { uploadFile } from "../Apis/FileUpload";

const Welcome = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
    console.log(event.target.files[0].name);
  };

  const redirectToStems = () => {
    history.push("stems");
  };

  const upload = () => {
    let currentFile = selectedFiles[0];
    setProgress(0);
    setCurrentFile(currentFile);

    uploadFile(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        localStorage.setItem("client_id", response.data.client_id);
        localStorage.setItem("output_folder", response.data.output_folder);
        redirectToStems();
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };
  return (
    <Row className="w-100 h-100 p-0 m-0 d-flex align-items-center justify-content-center ">
      <Card className="upload-card " style={{ backgroundColor: "#214D52" }}>
        <h1 className="upload-header">Upload an audio file to proceed</h1>
        <h4 className="upload-text">
          Select and upload the song you want to groove to using our visualizer
        </h4>

        {currentFile && (
          <div className="progress m-0 p-0">
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

        <Form className="upload-form">
          <Form.File
            id="custom-file-translate-scss"
            label={selectedFiles ? selectedFiles[0].name : "Upload audio"}
            lang="en"
            onChange={selectFile}
            custom
          />
        </Form>

        {false && (
          <label className="btn btn-default">
            <input type="file" onChange={selectFile} />
          </label>
        )}
        <div className="upload-button d-flex flex-column justify-content-end mt-4 mb-0 p-0">
          <Button
            variant="contained"
            color="default"
            disabled={!selectedFiles}
            onClick={upload}
            size="large"
            className="w-7rem mt-4 mb-0"
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </div>
        {false && (
          <div
            className="alert alert-light"
            role="alert"
            style={{ backgroundColor: "#214D52", border: "none" }}
          >
            {message}
          </div>
        )}

        <div className="mt-0 p-0">
          {progress === 100 ? (
            <Button variant="contained" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                className="text-white"
              />
              <div className="text-white">Processing File ...</div>
            </Button>
          ) : (
            <> </>
          )}
        </div>
      </Card>
    </Row>
  );
};

export default Welcome;
