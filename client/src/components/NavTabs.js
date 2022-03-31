import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../imgs/logoCrop.jpg";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange, isDesktop }) {
  return (
    <>
      {isDesktop ? (
        <Navbar
          className="nav"
          style={{ backgroundColor: "#f0ece3" }}
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="#home">
              <div className="test-w">
                <img class="w-100 h-100" src={logo} alt="sweeneyLogo"></img>
              </div>
            </Navbar.Brand>
            <Nav className="">
              <Nav.Link
                className="nav-item"
                onClick={() => handlePageChange("Features")}
              >
                Features
              </Nav.Link>
              <Nav.Link
                className="nav-item"
                onClick={() => handlePageChange("Menu")}
              >
                Menu
              </Nav.Link>
              <Nav.Link
                className="nav-item"
                onClick={() => handlePageChange("Bar")}
              >
                Bar
              </Nav.Link>
              <Nav.Link
                className="nav-item"
                onClick={() => handlePageChange("About")}
              >
                About
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      ) : (
        <Navbar style={{ backgroundColor: "#f0ece3" }} expand={false}>
          <Container fluid>
            <Navbar.Brand>
              
              <Nav.Link href="#home" onClick={() => handlePageChange("Home")}>
                <div className="test-w">
                  <img class="w-100 h-100" src={logo} alt="sweeneyLogo"></img>
                </div>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ backgroundColor: "#f0ece3" }}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    href="#home"
                    onClick={() => handlePageChange("Home")}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#about"
                    onClick={() => handlePageChange("About")}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    href="#menu"
                    onClick={() => handlePageChange("Menu")}
                  >
                    Menu
                  </Nav.Link>
                  <Nav.Link href="#bar" onClick={() => handlePageChange("Bar")}>
                    Bar
                  </Nav.Link>
                  <Nav.Link
                    href="#feature"
                    onClick={() => handlePageChange("Feature")}
                  >
                    Feature
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default NavTabs;
