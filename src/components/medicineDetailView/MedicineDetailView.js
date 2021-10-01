import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

function MedicineDetailView({ medicine }) {
  console.log(medicine);

  if (medicine) {
    return (
      <Container fluid>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Carousel style={{ width: "100%", height: "50vh", margin: "auto" }}>
              {medicine.photos.map((img, index) => (
                <Carousel.Item interval={1500} key={index}>
                  <img
                    className="d-block w-100"
                    src={img}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Carousel.Item>
              ))}
              {/* <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="https://www.yoga-stilvoll.de/wp-content/uploads/2019/11/Shiva%E2%80%94Ein-sehr-facettenreicher-Gott-e1573132050760.jpg"
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item> */}
            </Carousel>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    );
  } else {
    return <Container fluid>khkjh</Container>;
  }
}

export default MedicineDetailView;
