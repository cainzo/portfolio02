import React, { useRef, useState } from "react";
import "./about.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavigationBar from "../navigation/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faCss3Alt,
  faGithubSquare,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
  faReacteurope,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const About = () => {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      
    }
    sendEmail(e);
    setValidated(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3qybe14",
        "template_nvmoh5d",
        form.current,
        "oQC7R0EXPCG5FCdLH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  

  return (
    <div className="about  mx-auto" id='about'>
      <Container className="about-wrapper p-0 pt-5">
        <Row className="intro p-0 mx-auto">
          <Col lg={4} md={12} sm={12} className="yo">
            <h2 className="i-title">Hello, my name is:</h2>
            <h1 className="i-name ">Gonzalo Cainzo</h1>
            <p className=" text-start p-1">FullStack Developer MERN stack.</p>
            <p className="i-desc p-1">Recently graduated from a bootcamp, looking for a new career in web development. 
               Proactive and willing to learn.
            </p>
            <div className="i-icons ">
              <FontAwesomeIcon className="iconos" icon={faGithubSquare} />
              <FontAwesomeIcon className="iconos" icon={faJsSquare} />
              <FontAwesomeIcon className="iconos" icon={faCss3Alt} />
              <FontAwesomeIcon className="iconos" icon={faHtml5} />
              <FontAwesomeIcon className="iconos" icon={faReact} />
              <FontAwesomeIcon className="iconos" icon={faNode} />
              <FontAwesomeIcon className="iconos" icon={faBootstrap} />
            </div>
          </Col>
          <Col lg={8} md={12} sm={12} className="yo2 p-1">
            <Form
              ref={form}
              noValidate
              validated={validated}
              onSubmit={handleSubmit}

            >
              <h1 className="yo2-text">Send me and email:</h1>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label  className="yo2-text">Your name:</Form.Label>
                  <Form.Control
                    required
                    name="from_name"
                    type="text"
                    placeholder="Name"
                  />
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="8" controlId="validationCustom02">
                  <Form.Label  className="yo2-text" >Your Email</Form.Label>
                  <Form.Control
                    required
                    name="reply_to"
                    type="Email"
                    placeholder="Email"
                  />
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label  className="yo2-text">Your message to me</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    placeholder="Your message..."
                    name="message"
                    required
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit" className="form-btn">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container className="mx-auto my-auto"></Container>
    </div>
  );
};

export default About;
