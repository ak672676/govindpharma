import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MedicineDetailView from "../../components/medicineDetailView/MedicineDetailView";
import MedicineListItem from "../../components/medicineListItem/MedicineListItem";

import { medicineSearch } from "../../redux/actions/medicine.action";

function ItemScreen() {
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState("");

  // const items = [
  //   {
  //     id: "ss",
  //     availableToCustomer: true,
  //     company: "lupin",
  //     item: "Rablet 20",
  //     mrp: 100.89,
  //     package: "1*10",
  //     rate: 89.67,
  //     type: "tablet",
  //     photos: [
  //       "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
  //       "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
  //     ],
  //   },
  //   {
  //     id: "sqas",
  //     availableToCustomer: true,
  //     company: "lupin",
  //     item: "Aristozyme",
  //     mrp: 100.89,
  //     package: "1*10",
  //     rate: 89.67,
  //     type: "syrup",
  //     photos: [
  //       "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
  //       "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
  //     ],
  //   },
  //   {
  //     id: "sws",
  //     availableToCustomer: true,
  //     company: "lupin",
  //     item: "Rablet 20",
  //     mrp: 100.89,
  //     package: "1*10",
  //     rate: 89.67,
  //     type: "tablet",
  //     photos: [
  //       "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
  //       "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
  //     ],
  //   },
  // ];

  const items = useSelector((state) => state.medicine.medicine);
  console.log("Medicine  ", items);
  const dispatch = useDispatch();

  const onMedicineItemClicked = (medicine) => {
    console.log("Clicked Medicine 🔦 ", medicine);
    setSelectedMedicine(medicine);
  };

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(medicineSearch(searchKeyword));
  };

  return (
    <div>
      <Container fluid style={{ marginTop: "2rem" }}>
        <Row>
          <Col sm={9}>
            {selectedMedicine ? (
              <MedicineDetailView medicine={selectedMedicine} />
            ) : (
              <Link to="/addItem">
                <Button>Add Item</Button>
              </Link>
            )}
          </Col>
          <Col sm={3}>
            <Form onSubmit={onSearch}>
              <Row>
                <Col sm={8} className="my-1">
                  <Form.Control
                    placeholder="Medicine Name"
                    type="text"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                </Col>
                <Col xs="auto" className="my-1">
                  <Button type="submit">Search</Button>
                </Col>
              </Row>
            </Form>

            <hr />
            <div style={{ overflow: "auto", maxHeight: "70vh" }}>
              {items.length
                ? items.map((item) => (
                    <MedicineListItem
                      key={item.id}
                      medicine={item}
                      itemClicked={() => onMedicineItemClicked(item)}
                    />
                  ))
                : "Search your medicine"}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemScreen;
