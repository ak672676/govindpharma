import React from "react";
import { Card } from "react-bootstrap";

function CustomerListItem({ customer, itemClicked }) {
  return (
    <Card style={{ width: "100%", marginTop: "1rem" }} onClick={itemClicked}>
      <Card.Body>
        <Card.Title>{customer.shopName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {customer.ownerName}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default CustomerListItem;
