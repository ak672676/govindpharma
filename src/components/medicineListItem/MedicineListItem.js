import React from "react";
import { Card } from "react-bootstrap";

function MedicineListItem({ medicine, itemClicked }) {
  return (
    <Card style={{ width: "100%", marginTop: "1rem" }} onClick={itemClicked}>
      <Card.Body>
        <Card.Title>{medicine.item.toUpperCase() + " " + medicine.type.toUpperCase()}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {medicine.company.toUpperCase()}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default MedicineListItem;
