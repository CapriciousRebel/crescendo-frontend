import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Spinner } from "react-bootstrap";
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
    console.log(event.target.files[0].name)
  };

  const redirectToStems = () => {
    history.push("stems");
  }


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
    <Container className='w-100 h-100 d-flex align-items-center justify-content-center'>
      <Card className="upload-card m-0 px-5" style={{ backgroundColor: "#214D52" }}>

        <h1 className="mt-5 mx-0 p-0 text-left" style={{ color: "#0CB8CF" }}>Upload an audio file to proceed</h1>
        <h5 className="mt-3 mx-0 p-0 text-left" style={{ color: "white" }}>Select and upload the song you want to groove to using our visualizer </h5>

        {currentFile && (
          <div className="progress mt-5 mb-0 mx-0 p-0">
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

        <Form className="mx-auto px-0 mt-5 upload-form ">
          <Form.File
            id="custom-file-translate-scss"
            label={selectedFiles ? selectedFiles[0].name : "Choose audio file to upload"}
            lang="en"
            onChange={selectFile}
            custom
          />
        </Form>

        {false && (<label className="btn btn-default">
          <input type="file" onChange={selectFile} />
        </label>)}

        <Button
          variant="contained"
          color="default"
          disabled={!selectedFiles}
          onClick={upload}
          className="w-7rem mt-4"
          startIcon={<CloudUploadIcon />}
        >
          Upload
          </Button>
        <div className="alert alert-light" role="alert" style={{ backgroundColor: "#214D52", border: "none" }}>
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
  );
};

export default Welcome;
