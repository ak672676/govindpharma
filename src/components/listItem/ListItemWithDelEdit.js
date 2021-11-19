import React from "react";
import { Card } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function ListItemWithDelEdit({ item, editItem, deleteItem }) {
  return (
    <Card
      body
      style={{
        marginBottom: ".5rem",
        display: "flex",
      }}
    >
      <div style={{ display: "inline-block", alignItems: "flex-end" }}>
        {item.value}
      </div>
      <div style={{ display: "inline-block", justifyContent: "flex-end" }}>
        <AiFillDelete
          size={25}
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            deleteItem(item);
          }}
        />
        <AiFillEdit
          size={25}
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            editItem(item);
          }}
        />
      </div>
    </Card>
  );
}

export default ListItemWithDelEdit;
