import React, { useEffect, useState } from "react";
import { Button, Card, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineReload } from "react-icons/ai";
import { getUnverifiedUsers } from "../../redux/actions/customer.action";
import { db } from "../../firebase";

function UnapprovedCustomerScreen() {
  const [show, setShow] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const dispatch = useDispatch();

  const { unappprovedCustomers, loading, error, message } = useSelector(
    (state) => state.customer
  );

  useEffect(() => {
    console.log("akjlkjlkj lh lh l");
  }, [unappprovedCustomers]);

  const onReloadClicked = () => {
    console.log("aaaa");
    dispatch(getUnverifiedUsers());
  };

  const onItemClicked = (customer) => {
    console.log("Customer -> ", customer);
    setSelectedCustomer(customer);
    setShow(true);
  };

  const onApproveClicked = (id) => {
    db.collection("users")
      .doc(id)
      .set(
        {
          verified: true,
          active: true,
        },
        { merge: true }
      )
      .then(() => {
        setShow(false);
        setSelectedCustomer(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onRejectClicked = (id) => {};

  return (
    <div>
      {selectedCustomer && (
        <Modal
          show={show}
          onHide={() => {
            setShow(false);
            setSelectedCustomer(null);
          }}
          size="lg"
          scrollable={true}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {selectedCustomer.shopName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Subtitle className="mb-2 text-muted">Details</Card.Subtitle>

            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
            <hr />
            <Card.Subtitle className="mb-2 text-muted">Documents</Card.Subtitle>

            {selectedCustomer.doc
              ? Object.keys(selectedCustomer.doc).map((key, index) => (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={selectedCustomer.doc[key]} />
                    <Card.Body>
                      <Card.Title>{key}</Card.Title>
                    </Card.Body>
                  </Card>
                ))
              : "Nothing to show"}
            <div style={{ marginTop: "1rem" }}>
              <Button
                variant="outline-success"
                onClick={() => {
                  onApproveClicked(selectedCustomer.id);
                }}
              >
                Approve
              </Button>{" "}
              <Button
                variant="outline-danger"
                onClick={() => {
                  onRejectClicked(selectedCustomer.id);
                }}
              >
                Reject
              </Button>{" "}
            </div>
          </Modal.Body>
        </Modal>
      )}
      <Container fluid>
        <Row
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "1rem",
            paddingTop: "1rem",
          }}
        >
          <div onClick={onReloadClicked} style={{ cursor: "pointer" }}>
            <Button variant="outline-primary">
              <span style={{ marginRight: "1rem" }}>Reload</span>
              <AiOutlineReload />
            </Button>
          </div>
        </Row>
        <Row>
          {!unappprovedCustomers.length && <div>No user to approve</div>}
          {unappprovedCustomers.map((customer) => (
            <ListItem customer={customer} onItemClicked={onItemClicked} />
          ))}
        </Row>

        {/* <Button variant="primary" onClick={() => setShow(true)}>
        </Button> */}
      </Container>
    </div>
  );
}

export default UnapprovedCustomerScreen;

const ListItem = ({ customer, onItemClicked }) => {
  return (
    <Container
      fluid
      style={{ marginTop: "1rem" }}
      onClick={() => {
        onItemClicked(customer);
      }}
    >
      <Row>
        <Card style={{ width: "80%" }}>
          <Card.Body>
            <Card.Title>{customer.shopName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {customer.phone}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
