import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import CustomerDetailView from "../../components/customerDetailView/CustomerDetailView";
import CustomerListItem from "../../components/customerListItem/CustomerListItem";
import "./customerscreen.scss";
function CustomerScreen() {
  const [customer, setCustomer] = useState(null);
  const customers = [
    {
      id: "ss",
      shopName: "Kishor Medical",
      ownerName: "Sumit Kumar",
      primaryContactNumber: "7352916141",
    },
    {
      id: "ssq",
      shopName: "Govind Pharma",
      ownerName: "Nand Kishor Prasad",
      primaryContactNumber: "9471916073",
    },
    {
      id: "ssaa",
      shopName: "Kishor Medical",
      ownerName: "Sumit Kumar",
      primaryContactNumber: "7352916141",
    },
  ];

  const onCustomerItemClicked = (customer) => {
    console.log("Item Clicked", customer);
    setCustomer(customer);
  };
  return (
    <div className="customer">
      <Container fluid style={{ marginTop: "2rem" }}>
        <Row>
          <Col sm={9}>
            <CustomerDetailView customer={customer} />
          </Col>
          <Col sm={3}>
            <Form>
              <Row>
                <Col sm={8} className="my-1">
                  <Form.Control
                    id="inlineFormInputName"
                    placeholder="Shop Name"
                  />
                </Col>
                <Col xs="auto" className="my-1">
                  <Button type="submit">Search</Button>
                </Col>
              </Row>
            </Form>

            <hr />

            {customers.map((customer) => (
              <CustomerListItem
                key={customer.id}
                customer={customer}
                itemClicked={() => onCustomerItemClicked(customer)}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CustomerScreen;
