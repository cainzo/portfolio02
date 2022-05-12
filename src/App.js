//import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import './App.css'
import About from "./components/about/About";
import Projects from "./components/myprojects/Projects";
import NavigationBar from "./components/navigation/NavigationBar";


function App() {


  return (
    <Container className="m-0 p-0 app" id='home' fluid>
      <NavigationBar ></NavigationBar>
      <div className="bg"></div>
      <About></About>
      <Projects></Projects>
      
    </Container>

  );
}

export default App;
