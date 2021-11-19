import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Form,
  Image,
  Row,
  Col,
  Button,
  Modal,
  Alert,
  Spinner,
} from "react-bootstrap";
import Select from "react-select";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { storage } from "../../firebase";
import {
  setItemTypes,
  setPackageTypes,
} from "../../redux/actions/global.action";
import {
  addItem,
  cleanItemMsgError,
} from "../../redux/actions/medicine.action";

function ItemAddScreen() {
  const [itemData, setItemData] = useState({
    availableToCustomer: false,
    company: "",
    item: "",
    mrp: 0,
    package: "",
    rate: 0,
    type: "",
    photos: [],
    composition: "",
  });

  const [errors, setErrors] = useState({
    item: "",
    type: "",
  });

  const { loading, error, message } = useSelector((state) => state.medicine);
  const {
    itemPackages,
    itemTypes,
    error: globalError,
  } = useSelector((state) => state.globalData);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setItemTypes());
    dispatch(setPackageTypes());
    console.log("aaaaaaa->   ", itemTypes);
    console.log("bbbbbbb->   ", itemPackages);
  }, []);

  useEffect(() => {
    console.log(itemData, loading, message, error);
  }, [itemData, loading, message, error]);

  const addNewImage = (e) => {
    const file = e.target.files[0];
    console.log("Add new Image ", file);
    console.log(storage);
    var storageRef = storage.ref("products/" + Math.random() + "_" + file.name);
    let uploadTask = storageRef.put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          //   this.product.images.push(downloadURL);
          console.log(downloadURL);
          setItemData({
            ...itemData,
            photos: [...itemData.photos, downloadURL],
          });
        });
      }
    );
  };

  const onSaveItem = (e) => {
    e.preventDefault();

    // dispatch(addItem(itemData));
    // if (message) {
    //   history.push("/");
    // }
  };

  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={!!loading || !!error}
        onHide={() => {
          // setShow(false);
          // setNewItemAddMessage("");
          dispatch(cleanItemMsgError());
        }}
      >
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {loading && (
            <div>
              <Spinner animation="grow" variant="warning" size="lg" />
              <div>Saving</div>
            </div>
          )}
          {error && <div>{error}</div>}
        </Modal.Body>
      </Modal>
      <Container fluid >
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              flexDirection: "row",
              width: "15rem",
              height: "10rem",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            {!itemData.photos.length && <div>No Image</div>}

            {itemData.photos.map((photo) => (
              <Image
                style={{ width: "15rem", height: "auto", margin: "1rem" }}
                rounded
                src={photo}
              />
            ))}
          </Card>
          <Form.Control type="file" size="lg" onChange={addNewImage} />
        </Row>
        <hr />
        <Row>
          <Col>
            <Form onSubmit={onSaveItem}>
              <Row className="mt-3">
                <Col sm={5}>
                  <Form.Group className="mb-3">
                    <Form.Label>Item name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Item name"
                      value={itemData.item}
                      onChange={(e) =>
                        setItemData({
                          ...itemData,
                          item: e.target.value,
                        })
                      }
                      isInvalid={!!"aa"}
                    />
                    <Form.Control.Feedback type="invalid">
                      {"aa ljljlk"}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Company"
                      value={itemData.company}
                      onChange={(e) =>
                        setItemData({
                          ...itemData,
                          company: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    {/* <Form.Control
                      type="text"
                      placeholder="Type"
                      value={itemData.type}
                      onChange={(e) =>
                        setItemData({
                          ...itemData,
                          type: e.target.value,
                        })
                      }
                    /> */}
                    <Select
                      options={itemTypes}
                      // defaultValue={itemTypes[0]}
                      isSearchable={true}
                      isClearable={true}
                      onChange={(selectedItem) => {
                        setItemData({
                          ...itemData,
                          type: selectedItem.value,
                        });
                        // console.log(e);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col sm={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>Package</Form.Label>
                    {/* <Form.Control
                      type="text"
                      placeholder="Package"
                      value={itemData.package}
                      onChange={(e) =>
                        setItemData({
                          ...itemData,
                          package: e.target.value,
                        })
                      }
                    /> */}
                    <Select
                      options={itemPackages}
                      // defaultValue={itemPackages[0]}
                      isSearchable={true}
                      isClearable={true}
                      onChange={(selectedItem) => {
                        setItemData({
                          ...itemData,
                          package: selectedItem.value,
                        });
                        // console.log(e);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={7}>
                  <Form.Group className="mb-3">
                    <Form.Label>Composition</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Composition"
                      value={itemData.composition}
                      onChange={(e) =>
                        setItemData({
                          ...itemData,
                          composition: e.target.value,
                        })
                      }
                    />
                    {/* <div className="text-danger">ss</div> */}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>MRP</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MRP"
                      value={itemData.mrp}
                      onChange={(e) =>
                        setItemData({
                          ...itemData,
                          mrp: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Rate"
                      value={itemData.rate}
                      onChange={(e) =>
                        setItemData({
                          ...itemData,
                          rate: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={2}>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Available to customer"
                      checked={itemData.availableToCustomer}
                      onChange={(e) =>
                        setItemData({
                          ...itemData,
                          availableToCustomer: !itemData.availableToCustomer,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemAddScreen;
