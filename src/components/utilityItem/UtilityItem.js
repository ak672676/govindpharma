import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";

function UtilityItem({ name, link }) {
  const history = useHistory();

  return (
    <Card
      style={{
        width: "18rem",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontWeight: "500",
        textTransform: "uppercase",
        boxShadow: "1px 3px 1px #9E9E9E",
        margin: "1rem",
      }}
      onClick={() => {
        console.log("link ", link);
        history.push(link);
      }}
    >
      {/* <Card.Title>Card Title</Card.Title> */}
      {name}
    </Card>
  );
}

export default UtilityItem;
