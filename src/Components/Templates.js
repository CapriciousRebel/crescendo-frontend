import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import ControlledOpenSelect from "./Dropdown";
import { chooseTemplate } from "../Apis/Templates.js";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const Templates = () => {
  const classes = useStyles();

  const [finalData, setFinalData] = useState({
    scale: "",
    water: "",
    particles: "",
  });

  const handleSubmit = () => {
    finalData.client_id = localStorage.getItem("client_id");
    finalData.output_folder = localStorage.getItem("output_folder");
    console.log(finalData);
    chooseTemplate(finalData);
  };

  const handleChangeCallBack = (type, template) => {
    let newFinalData = finalData;
    newFinalData[type] = template;
    setFinalData(newFinalData);
  };

  return (
    <Container fluid className="m-0 px-0 pb-0 pt-2">
      <Row className="mx-auto py-auto">
        <h1 className="mx-auto">Choose a template!</h1>
      </Row>
      <hr className="mt-2 mb-3" />
      <Row className="mt-0 mx-0">
        <Col>
          <Row className="mx-0">
            <Col>
              <h3 className="mt-0 text-left">Template 1: Rick roll!</h3>
              <div className="embed-responsive embed-responsive-16by9 width-50 mx-auto mt-5">
                <iframe
                  title="sample video 1"
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                  allowFullScreen
                ></iframe>
              </div>
              <h5 className="mt-3">Sample Video</h5>
              <hr className="my-4"></hr>
              <Row className="mx-0">
                <Col xl={4}>
                  <Card className="template-card mx-auto">
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="http://localhost:6900/images/template.jpeg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Scale
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <ControlledOpenSelect
                        type="scale"
                        changeCallback={handleChangeCallBack}
                      />
                    </CardActions>
                  </Card>
                </Col>
                <Col xl={4}>
                  <Card className="template-card mx-auto">
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="http://localhost:6900/images/template2.jpeg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Water
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <ControlledOpenSelect
                        type="water"
                        changeCallback={handleChangeCallBack}
                      />
                    </CardActions>
                  </Card>
                </Col>
                <Col xl={4}>
                  <Card className="template-card mx-auto">
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="http://localhost:6900/images/template3.jpeg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Particles
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <ControlledOpenSelect
                      type="particles"
                      changeCallback={handleChangeCallBack}
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className="my-5"
      >
        Submit!
      </Button>
    </Container>
  );
};

export default Templates;
