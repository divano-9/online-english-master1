import { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import top from "../assets/nav-background.svg";
import bg from "../assets/site-bg.svg";
import zaloL from "../assets/photos/zalo-ll.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Context } from "../states/GlobalContext";

const Navigation = () => {
  const { setLanguage, languages } = useContext(Context);

  const [show, setShow] = useState(false);
  const hamburgerBtn = useRef(null);

  const controlNavbar = () => {
    if (window.scrollY > 300) {
      // if scroll down show the navbar
      setShow(true);
    } else {
      // if scroll up hide the navbar
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    console.log("languages: ", languages);
    if (languages[0] == "vi") {
      setLanguage("viet");
    }
    if (languages[0] == "sr") {
      setLanguage("srb");
    }
  }, []);

  return (
    <div className="navigation">
      <div className={show ? "follow fix purple-bg" : "follow"}>
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
                <Link to={"/blog"} className="nav-link">
                  Blog
                </Link>
                <Link to={"/#courses"} className="nav-link">
                  Courses
                </Link>
                <Link to={"/#pricing"} className="nav-link">
                  Pricing
                </Link>
                <Link to={"/#contact"} className="nav-link">
                  Contact
                </Link>
                <Link to={"/qa"} className="nav-link">
                  Q/A
                </Link>

                <div className="qr">
                  <Zoom>
                    <img src={zaloL} className="zalo" />
                  </Zoom>
                </div>
                <div className="language">
                  <span
                    className="fi fi-gb"
                    onClick={() => {
                      console.log("english");
                      setLanguage("eng");
                    }}
                  ></span>
                  <span
                    className="fi fi-vn"
                    onClick={() => {
                      console.log("viet");
                      setLanguage("viet");
                    }}
                  ></span>
                  <span
                    className="fi fi-rs"
                    onClick={() => {
                      console.log("serbian");
                      setLanguage("srb");
                    }}
                  ></span>
                </div>
                <div className="btn-container">
                  <button className="contact-btn">
                    <Link to="/#contact">Sign Up</Link>
                  </button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
