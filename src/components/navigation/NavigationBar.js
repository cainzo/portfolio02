import React, { useRef } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAngleDoubleDown,
  faAngleDown,
  faAngleUp,
  faGrinAlt,
  faSquareArrowUpRight,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import "./navigationBar.css";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
const NavigationBar = () => {
  const portfolio = useRef(false)
  const about = useRef(false)
  
  const scrollToElement = (elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

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
            <Nav.Link href="https://github.com/cainzo" target="_blank" className="navLinksIcon">
              <FontAwesomeIcon icon={faGithubSquare} />
            </Nav.Link>
            <Nav.Link href="#porfolio" onClick={()=>{scrollToElement(portfolio)}} className="navLinks">
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
