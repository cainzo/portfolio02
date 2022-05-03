import React from "react";
import "./projects.css";
import { Col, Container, Nav, Row } from "react-bootstrap";
import RollingPost from "../../img/rollingpost.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import Airnbn from '../../img/airnbn.jpeg'
const Projects = () => {
  return (
    <div className="projects text-center">
     
      <Container className="projects-wrapper p-1" id='porfolio'>
      <h1 className="my-5">My personal projects</h1>
        <Row className="">
          <Col lg={12} md={12} sm={12} className=" mb-2">
            <div className="card">
              <img src={RollingPost} alt="" className="card-img" />

              <div className="card-dec">
                <a
                  href="https://rollingpost.netlify.app/"
                  target="_blank"
                  className="card-title"
                >
                  <h1>Rolling Post</h1>
                </a>
                <a
                  href="https://github.com/cainzo/DiarioPresentar/blob/main/README.md"
                  target="_blank"
                  className="link-git"
                >
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="card-icon"
                  />
                </a>
                <p className="p-desc">
                  Small front and back end project. Hosted using netlify and
                  heroku.{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} className=" mb-2">
            <div className="card">
              <img src={Airnbn} alt="" className="card-img" />

              <div className="card-dec">
                <a
                  className="card-title"
                >
                  <h1>AirNbN</h1>
                </a>
                <a
                  href="https://github.com/cainzo/airnbn"
                  target="_blank"
                  className="link-git"
                >
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="card-icon"
                  />
                </a>
                <p className="p-desc ">
                  Small front end project.
                </p>
              </div>
            </div>
          </Col>
         
        </Row>
       
      </Container>
    </div>
  );
};

export default Projects;
