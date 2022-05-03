import React from "react";
import "./projects.css";
import { Col, Container,  Row } from "react-bootstrap";
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
                  rel="noreferrer"
                  className="card-title"
                >
                  <h1>Rolling Post Live Demo</h1>
                </a>
                <a
                  href="https://github.com/cainzo/DiarioPresentar/blob/main/README.md"
                  target="_blank"
                  rel="noreferrer"
                  className="link-git"
                >
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="card-icon"
                  />
                </a>
                <p className="p-desc">
                  NewsPaper: front and back end project. Hosted using netlify and
                  Heroku for the back end.(Give it 30 secs so the back en can warm up)
                </p>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} className=" mb-2">
            <div className="card">
              <img src={Airnbn} alt="" className="card-img" />

              <div className="card-dec">
                <a
                  href="https://github.com/cainzo/airnbn"
                  className="card-title"
                  rel="noreferrer"

                  target="_blank"
                >
                  <h1>AirNbN</h1>
                </a>
                <a
                  href="https://github.com/cainzo/airnbn"
                  target="_blank"
                  rel="noreferrer"
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
