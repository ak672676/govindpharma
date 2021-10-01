import React from "react";
import { Container, Row } from "react-bootstrap";

function CustomerDetailView({ customer }) {
  console.log("---->", customer);

  if (customer) {
    return (
      <Container>
        <Row>{customer.shopName}</Row>
        <Row>huihiu</Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row>huihiu</Row>
      </Container>
    );
  }
}

export default CustomerDetailView;
