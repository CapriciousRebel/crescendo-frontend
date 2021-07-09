import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { Row, Col, Form, Spinner } from "react-bootstrap";
import music from "../images/music.png";
import { getOutputFile } from "../Apis/Output";
import { openInNewTab } from "../Utils/utils";

const Output = () => {
  const [outputURL, setOutputURL] = useState(""); // url to download the final output video

  const fetchFile = () => {
    // make  request every 10s to update the status of the output file
    setInterval(() => {
      getOutputFile(
        localStorage.getItem("client_id"),
        localStorage.getItem("output_folder")
      ).then((response) => {
        setOutputURL(response.data.url);
      });
    }, 10000);
  };

  useEffect(() => {
    fetchFile();
  }, []);

  return (
    <>
      <Row className="w-100 h-100">
        <Col xl={6} className="my-auto pl-5">
          <h1
            className="mt-5 mb-0 mx-0 p-0 text-left"
            style={{ color: "#0CB8CF", fontSize: "4rem" }}
          >
            Thank you for using Crescendo!
          </h1>
          <h3 className="text-left mt-3 mb-4" style={{ color: "white" }}>
            While your video is being processed, munch on a few snacks and get sit tight!
          </h3>
          <div className="d-flex">
            {outputURL ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  openInNewTab(outputURL)
                }}>
                Final Video!
              </Button>
            ) : (
              <Button variant="contained" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="text-white mr-3 p-0"
                />
                <div className="text-white m-0 p-0">Processing video</div>
              </Button>
            )}
          </div>
        </Col>
        <Col xl={6} className="my-auto mx-0 p-0">
          <img
            src={music}
            alt="Loading . . ."
            className="music-image"
            style={{ width: "800px" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Output;
