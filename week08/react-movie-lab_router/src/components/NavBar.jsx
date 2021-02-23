import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

export default function NaveBar(props) {
  return (
    <Navbar  collapseOnSelect expand="lg" bg="dark bg-color-nav" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Movies App SEI-13
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/movies">
            All movies
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Nav> 
          
          {!props.isLoggedIn ? <> 
          <Nav.Link as={Link} to="/login">
            login
          </Nav.Link>
          <Nav.Link eventKey={2} as={Link} to="/signup">
            signup
          </Nav.Link>
        
        
        </>:  <> <Nav.Link as={Link} to="/profile">
            profile
          </Nav.Link>
          
          <Button
            onClick={() => {
              console.log("Logging Out!");
              localStorage.removeItem("jwtToken");
              props.loginCallback();
            }}
          >
            Logout
          </Button> </> }
         
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
