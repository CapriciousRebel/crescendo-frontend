import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { getOutputFile } from "../Apis/Output.js"

const Output = () => {
    const [outputFile, setOutputFile] = useState("");

    const fetchFile = () => {
        getOutputFile(
            localStorage.getItem("client_id"),
            localStorage.getItem("output_folder")
        ).then((response) => {
            setOutputFile(response.data.url);
        });
    }
    useEffect(() => {
        fetchFile();
    });

    return (
        <>
            <h1 className='mt-5'>Thank you for using Crescendo!</h1>
            <h3 className="mt-5">Here is your video:</h3>
            {outputFile ? (
                <a href={outputFile}>File!</a>) : <> </>}

        </>
    );
};

export default Output;
