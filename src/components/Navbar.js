import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBar = (props) => {
  const { brandName } = props;
  return (
    <Navbar bg="danger" variant="dark">
      <Container fluid>
        <Navbar.Brand>{brandName}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
