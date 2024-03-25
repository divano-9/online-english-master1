import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import top from "../assets/nav-background.svg";
import bg from "../assets/site-bg.svg";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      // if scroll down show the navbar
      setShow(true);
    } else {
      // if scroll up hide the navbar
      setShow(false);
    }

    // remember current page location to use in the next move
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
  }, []);

  return (
    <div className="navigation">
      <img src={top} className="top-img" />
      <div className="follow">
        {show && <img src={bg} className="bg" />}
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to={"/#home"} className="navbar-brand"></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Link to={"/#home"} className="nav-link">
                  Home
                </Link>
                <Link to={"/#about"} className="nav-link">
                  About
                </Link>
                <NavDropdown title="Courses" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#course1">Course 1</NavDropdown.Item>
                  <NavDropdown.Item href="#course2">Course 2</NavDropdown.Item>
                  <NavDropdown.Item href="#course3">Course 3</NavDropdown.Item>
                  <NavDropdown.Item href="#course4">Course 4</NavDropdown.Item>
                </NavDropdown>
                <Link to={"/#contact"} className="nav-link">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
