import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Form, Spinner } from "react-bootstrap";
import { Card, Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { uploadFile } from "../Apis/Files";

export default function Upload() {
  const [uploading, setUploading] = useState(false); // true if the selected file uploading right now
  const [selectedFile, setSelectedFile] = useState(undefined); // the file selected by the user to be uploaded
  const [progress, setProgress] = useState(0); // progress of the file uploading 
  const history = useHistory();

  const upload = () => {
    setProgress(0);
    setUploading(true);

    uploadFile(selectedFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));

    }).then((response) => {
      localStorage.setItem("client_id", response.data.client_id);
      localStorage.setItem("output_folder", response.data.output_folder);
      history.push("stems");

    }).catch(() => {
      alert("Failed to upload the file! Please try again.")
      setProgress(0);
      setSelectedFile(undefined);

    });
  };


  return (
    <Row className="w-100 h-100 p-0 m-0 d-flex align-items-center justify-content-center">
      <Card className="upload-card " style={{ backgroundColor: "#214D52" }}>
        <h1 className="upload-header">Upload an audio file to proceed</h1>
        <Form className="upload-form">
          <Form.File
            id="custom-file-translate-scss"
            label={selectedFile ? selectedFile.name : "Choose an audio file to upload!"}
            lang="en"
            accept="audio/*"
            onChange={(event) => {
              setSelectedFile(event.target.files[0]);
            }}
            custom
          />
        </Form>

        {selectedFile && uploading && (
          <div className="progress mt-5 mb-5 p-0">
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

        {!uploading && (
          <div className="upload-button d-flex flex-column justify-content-end mt-4 mb-0 p-0">
            <Button
              variant="contained"
              color="default"
              disabled={!selectedFile}
              onClick={upload}
              size="large"
              className="w-7rem mt-4 mb-0"
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
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
                className="text-white mr-3 p-0"
              />
              <div className="text-white m-0 p-0">Processing File</div>
            </Button>
          ) : (
            <> </>
          )}
        </div>
      </Card>
    </Row>
  );
}
