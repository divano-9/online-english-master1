import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import top from "../assets/nav-background.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={top} className="top-img" />
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
              <Link to={"/about"} className="nav-link">
                About
              </Link>
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Action3</NavDropdown.Item>
              </NavDropdown>
              <Link to={"/#contact"} className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
