import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { BiDollar } from "react-icons/bi";
import { BsSearch } from "react-icons/bs"

const NewArrivals = () => {
  const [newarrs, setNewarr] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => {
      setNewarr(res.data.newall);
    });
  }, []);
  return (
    <>
    <section className="mansec">
      <Container>
        <Row className="mt-5 mb-4 d-sm-flex d-block top">
          <Col className="left">
            <h1>New Arrivals</h1>
          </Col>
          <Col className="d-md-block d-none"></Col>
          <Col className="d-flex mb-4 right">
              <input className="me-4 mt-2 ps-2 mb-4 " type="search" placeholder="search"/> 
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="px-4">
                Category
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row>
          {newarrs.map((newarr) => (
            <Col lg={4} md={6} sm={12} className="mb-5">
              <Card
                className="shadow text-sm-start text-center"
                style={{ maxwidth: "18rem" }}
                key={newarr.id}
              >
                <div>
                  <Card.Img className="photo" variant="top" src={newarr.photo} />
                  <Card.Img
                    className="photo-2"
                    variant="top"
                    src={newarr.photo2}
                  />
                  <Card.Text>{newarr.Description}</Card.Text>
                </div>
                <Card.Body>
                  <Card.Title>
                    <NavLink to="/Shop">{newarr.title}</NavLink>
                  </Card.Title>
                  <div className="text-sm-start text-center">
                  <Card.Subtitle className="mb-2 text-muted">
                    <BiDollar />
                    {newarr.price}
                  </Card.Subtitle>
                  </div>

                  <hr />
                  <NavLink to="/Shop">Quick Add</NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer /> 
    </section>
  </>
  )
}

export default NewArrivals