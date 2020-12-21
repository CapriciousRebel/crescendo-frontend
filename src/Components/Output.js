import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Row, Col } from "react-bootstrap"
import music from "../images/music.png"
import { getOutputFile } from "../Apis/Output.js";


const Output = () => {
    const [outputFile, setOutputFile] = useState("");

    // make  request every 10s
    const fetchFile = () => {
        getOutputFile(
            localStorage.getItem("client_id"),
            localStorage.getItem("output_folder")
        ).then((response) => {
            setOutputFile(response.data.url);
        });

        setInterval(() => {
            getOutputFile(
                localStorage.getItem("client_id"),
                localStorage.getItem("output_folder")
            ).then((response) => {
                setOutputFile(response.data.url);
            });
        }, 10000);
    }

    useEffect(() => {
        fetchFile();
    });

    return (
        <>
            <Row className="w-100 h-100">
                <Col xl={6} className="my-auto pl-5">
                    <h1 className="mt-5 mb-0 mx-0 p-0 text-left" style={{ color: "#0CB8CF", fontSize: "4rem" }}>Thank you for using Crescendo!</h1>
                    <h3 className="text-left mt-3 mb-4" style={{ color: "white" }}>Your video is being processed, munch on a few snacks while we are getting it ready for you.</h3>
                    <div className="d-flex">
                        {outputFile ? (
                            <Button
                                type="button"
                                class="btn btn-primary"
                                size="large"
                                onClick={() => window.location.href = outputFile}
                            >
                                Final Video!
                            </Button>
                        ) : (
                                <>
                                </>
                            )
                        }
                    </div>
                </Col>
                <Col xl={6} className="my-auto mx-0 p-0">
                    <img
                        src={music}
                        alt="Loading . . ."
                        className="m-0 p-0"
                        style={{ width: "800px" }} />
                </Col>
            </Row>


        </>
    );
};

export default Output;
