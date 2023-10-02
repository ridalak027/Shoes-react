import React, { useState, useEffect, useRef, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Section2 from "./Section2";


import "./App.css";

const Home = () => {
  return (
    <>
      {/* Start Bannar */}
      <section className="bannar">
        <div className="text-center">
          <h1>Meet The Cooper Skate</h1>
          <p>
            The ultimate-thrOwback to 90's skate culture - designed with
            exaggerated dimensions and crafted with premium materials.
          </p>
          <NavLink to="/Shop">SHOP NOW</NavLink>
        </div>
      </section>
      {/* End Bannar */}
      {/* Start Section 2 */}
      <section>
        <Container fluid>
          <Row>
            <Section2 />
          </Row>
        </Container>
      </section>
      {/* End Section 2 */}
      {/* Start Section 3 */}
      <section className="sec-3">
        <Container fluid>
          <Row>
            <Col className="big-img-left text-center" lg={6} md={6}>
              <div>
                <p>Everyone's Favorite</p>
                <h1>The Royale 2.0</h1>
                <NavLink to="/Shop">SHOP NOW</NavLink>
              </div>
            </Col>
            <Col className="big-img text-center" lg={6} md={6}>
              <div>
                <p>New Arrivals</p>
                <h1>Women's Sneakers</h1>
                <Button className="btn" variant="light">
                  SHOP NOW
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End Section 3 */}
      {/* Start Section 4 */}
      <section className="sec-4">
        <Container>
          <div>
            <h1>Featured</h1>
          </div>
          <Row className="cards">
            <Col className=" left-card text-center" lg={4} md={6} sm={12}>
              <NavLink to="/Man">
                <div>
                <img src="images/Home/Low_Tops_230726-Royale-2.0-Content-Blocks-Featured.jpg" />
                </div>
                <p>
                  Man Shop
                </p>
              </NavLink>
            </Col>
            <Col className=" medil-card text-center" lg={4} md={6} sm={12}>
              <NavLink to="/Women">
                <div>
                <img src="images/Home/Shop-White-Sneakers-Womens.jpg" />
                </div>
                <p>
                  Women Shop
                </p>
              </NavLink>
            </Col>

            <Col className=" right-card text-center" lg={4} md={6} sm={12}>
              <NavLink to="/Shop">
                <div>
                <img src="images/Home/Mens-New-Arrivals-230907-Secondary-Fall-HP-Update-Nav.jpg" />
                </div>
                <p>
                  Shop Now
                </p>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End Section 4 */}
      {/* Start Footer */}
      <Footer />
    </>
  );
};

export default Home;
