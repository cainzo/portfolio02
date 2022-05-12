import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RollingPost from "../../img/rollingpost.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import Airnbn from "../../img/airnbn.jpeg";
import "./projects.css";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
const Projects = () => {
  return (
    <Container className="text-center">
      <h1 className="projects">My personal projects</h1>

      <Col className="mt-5">
        <Row className="mb-5 todo">
          <Col lg={4} className=" p-0  izq">
            <a
              href="https://rollingpost.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="titulo pt-3">RollingPost</h1>
            </a>
            <p className="desc  text-start px-3">
              <b>News paper project fully functional:</b>
              <br />
              Register , login, dynamic news cards and categories links.
              <br />
               Admin
              panel using JWT  with  CRUD operations. 
              <br />
              <a
                href="https://rollingpost.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Front-End hosted in Netlify.{" "}
                <span style={{ fontSize: "12px" }}>(live preview)</span>
              </a>
              <br />
              Back-End hosted in Heroku.
              <span style={{ fontSize: "12px" }}>(30 secs to spin up)</span>
              <br />
            </p>
            <Container>
              <a
                href="https://github.com/cainzo/DiarioPresentar/blob/main/README.md"
                target="_blank"
                rel="noreferrer"
                className="link-git"
              >
                <FontAwesomeIcon icon={faGithubSquare} className="icon" />
              </a>
            </Container>
            <Container className="p-0 m-0 container-iconos pb-2">
              <FontAwesomeIcon className="icono" icon={faJsSquare} />
              <FontAwesomeIcon className="icono" icon={faCss3Alt} />
              <FontAwesomeIcon className="icono" icon={faHtml5} />
              <FontAwesomeIcon className="icono" icon={faReact} />
              <FontAwesomeIcon className="icono" icon={faNode} />
              <FontAwesomeIcon className="icono" icon={faBootstrap} />
            </Container>
          </Col>
          <Col lg={8} className=" p-0">
            <img src={RollingPost} className=" img" />
          </Col>
        </Row>
        {/** otra card para otro proyexto */}
        <Row className="mb-5 todo">
          <Col lg={4} className=" p-0  izq">
            <a
              href="https://github.com/cainzo/airnbn"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="titulo pt-3">AirNbN</h1>
            </a>
            <p className="desc  text-start px-3">
              <b>Booking clone:</b>
              <br />
                Small front end project created using styled components, 3 pages with diferent functions.
              <br />
              <span style={{ fontSize: "12px", color:"#555" }}>API integration and deploy comming soon</span>
              
            </p>
            <Container>
              <a
                href="https://github.com/cainzo/airnbn"
                target="_blank"
                rel="noreferrer"
                className="link-git"
              >
                <FontAwesomeIcon icon={faGithubSquare} className="icon" />
              </a>
            </Container>
            <Container className="p-0 m-0 container-iconos pb-2">
              <FontAwesomeIcon className="icono" icon={faJsSquare} />
              <FontAwesomeIcon className="icono" icon={faCss3Alt} />
              <FontAwesomeIcon className="icono" icon={faHtml5} />
              <FontAwesomeIcon className="icono" icon={faReact} />
              <FontAwesomeIcon className="icono" icon={faNode} />

            </Container>
          </Col>
          <Col lg={8} className=" p-0">
            <img src={Airnbn} className=" img" />
          </Col>
        </Row>
      </Col>

      

      {/*<Col lg={12} md={12} sm={12} className=" mb-2">
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
          </Col>*/}
    </Container>
  );
};

export default Projects;
