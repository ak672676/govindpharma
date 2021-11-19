import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import ListItemWithDelEdit from "../../components/listItem/ListItemWithDelEdit";

function TypeScreen() {
  const { itemTypes } = useSelector((state) => state.globalData);
  const [show, setShow] = useState(false);
  const [editItemText, setEditItemText] = useState("");

  console.log(itemTypes);
  const onEditItem = (item) => {
    setShow(true);
    setEditItemText(item.value);
  };

  const onDeleteItem = (item) => {
    // setShow(true);

    console.log("On Item delete ", item);
  };

  const onSaveItemType = (e) => {
    e.preventDefault();
    console.log("On save item type");
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          // setSelectedCustomer(null);
        }}
        size="lg"
        // scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Edit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSaveItemType}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Type"
                value={editItemText}
                onChange={(e) => {
                  setEditItemText(e.target.value);
                }}
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Save
            </Button>
            <Button
              style={{ marginLeft: "1rem" }}
              variant="danger"
              onClick={() => {
                setEditItemText("");
                setShow(false);
              }}
            >
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Container fluid>
        <Row
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormControl
            placeholder="Search"
            style={{ borderRadius: "50px", width: "70%" }}
          />
        </Row>

        <Row
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              overflow: "auto",
              maxHeight: "80vh",
              width: "75%",
            }}
          >
            {itemTypes.map((item) => (
              <ListItemWithDelEdit
                item={item}
                editItem={onEditItem}
                deleteItem={onDeleteItem}
              />
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default TypeScreen;
