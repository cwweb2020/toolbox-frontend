import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Container
      style={{ height: "50vh" }}
      className=" d-flex justify-content-center align-items-center"
    >
      <Spinner size="xl" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loading;
