import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import Slider from "react-slick";
import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";

const Section2 = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setProduct(res.data.new);
    });
  }, []);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="sec-2">
        <Container className="after-card">
          <Row>
            <Col className="left" lg={10} md={8} sm={6}>
              <h1>New Arrivals</h1>
            </Col>
            <Col className="right" lg={2} md={4} sm={6}>
              <Button className="btn btn-l" variant="light" onClick={previous}>
                <AiOutlineCaretLeft />
              </Button>
              <Button className="btn btn-r" variant="light" onClick={next}>
                <AiOutlineCaretRight />
              </Button>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <Card
                className="shadow"
                style={{ width: "18rem" }}
                key={product.id}
              >
                <div>
                  <Card.Img className="photo" variant="top" src={product.photo} />
                  <Card.Img className="photo-2" variant="top" src={product.photo2} />
                  <Card.Text>{product.Description}</Card.Text>
                </div>
                <Card.Body>
                  <Card.Title><NavLink to="/Shop">{product.title}</NavLink></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><BiDollar />{product.price}</Card.Subtitle>
                  
                  <hr/>
                  <NavLink to="/Shop">Quick Add</NavLink>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Section2;
