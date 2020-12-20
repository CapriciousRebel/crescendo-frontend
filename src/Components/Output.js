import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Card, Button } from "@material-ui/core";
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
            <h1 className='my-5'>Thank you for using Crescendo!</h1>
            <h3 className="mt-5">Here is your video:</h3>
            {outputFile ? (
                <a href={outputFile}>Final Video!</a>
            ) : (

                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
              Processing Video ...
                    </Button>
                )
            }

        </>
    );
};

export default Output;
