import React, { Fragment } from "react";
import { json, Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import { User_Context } from "../../contexts/user.context.component";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

function Navigation() {
  const Navigate = useNavigate();
  const { currentUser } = useContext(User_Context);
  return (
    <NavigationContainer>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              Navigate("/");
            }}
          >
            WM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <Nav.Link
                onClick={() => {
                  Navigate("/collections");
                }}
              >
                Collections
              </Nav.Link>
              <NavDropdown title="Shop" id="collasible-nav-dropdown">
                <Nav.Link
                  className="custom-nav-links"
                  style={{ color: "blue" }}
                  onClick={() => {
                    Navigate("/men-shoes");
                  }}
                >
                  Men's Shoes
                </Nav.Link>
                <Nav.Link
                  className="custom-nav-links"
                  onClick={() => {
                    Navigate("/women-shoes");
                  }}
                >
                  Women's Shoes
                </Nav.Link>
                <Nav.Link
                  className="custom-nav-links"
                  onClick={() => {
                    Navigate("/kids-shoes");
                  }}
                >
                  Kid's Shoes
                </Nav.Link>
              </NavDropdown>
              {currentUser ? (
                <Nav.Link
                  onClick={() => {
                    SignOutUser();
                  }}
                >
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => {
                    Navigate("/authentication");
                  }}
                >
                  Sign In
                </Nav.Link>
              )}
              <Nav.Link eventKey={2}>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </NavigationContainer>
  );
}

export default Navigation;

const NavigationContainer = styled.div`
  .custom-nav-links {
    color:#212529!important;
  }
  .custom-nav-links:hover {
    background-color: #212529;
    color:white !important; 
`;
