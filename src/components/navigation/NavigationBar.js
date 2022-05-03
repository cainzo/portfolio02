import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import "./navigationBar.css";

const NavigationBar = () => {
 
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="dark"
      className="navbar"
      sticky="top"
    >
      <Container className="p-1">
        <Navbar.Brand href="#home" className="nav-brand">
          Gonzalo/Cainzo
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navToggle"
        >
          <FontAwesomeIcon icon={faAngleUp} className="icono" />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end navToggle2"
        >
          <Nav className="nav-links">
            <Nav.Link
              href="https://github.com/cainzo"
              target="_blank"
              rel="noreferrer"
              className="navLinksIcon"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </Nav.Link>
            <Nav.Link href="#porfolio" className="navLinks">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#home" className="navLinks">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
