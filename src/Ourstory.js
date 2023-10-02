import React from 'react'
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Container, Row, Col} from "react-bootstrap";
import { BiDollar } from "react-icons/bi";
import Card from "react-bootstrap/Card";
import Footer from './Footer'

const Ourstory = () => {
  return (
    <>
    {/* Start ourbannar1 */}
      <section className='ourbannar1 '>
      </section>
    {/* End ourbannar1 */}
    {/* Start ourbannar2*/}
      <section className='ourbannar2'>
        <div className='text-center'>
          <div className='top'>
          <h1>
            Born in Brooklyn.Responsible
          </h1>
          <h1>
            Materials.Hand Crafted.
          </h1>
          </div>
          <div className='parg mx-3'>
          <p>
            Founded in 2014, GREATS is the first sneaker brand born in Brooklyn. Our commitment to you is to create
            sneakers with a superior fit and feel that's built to last. Our goal is to ethically transform premium materials into
            an experience that moves you. We make shoes that last a lifetime and we like to make them in a responsible
            way.
          </p>
          </div>
          </div>
      </section> 
    {/* End ourbannar2 */}
    {/* Start ourbannar3 */}
      <section className='ourbannar3'>
      </section>
    {/* End ourbannar3 */}
    {/* End ourbannar3 */}
    {/* Start oursec-1 */}
    <section className='oursec-1 mt-5'>
      <Container fluid className='total-card mx-5'>
      <div className='text-start after-card1'>
        <h1>Quality Craftsmanship</h1>
        <div className='text-start'>
        <p>
        Greats is a brand that believes in being the highest quality because products
        should be built to last. Quality means we believe in an experience that moves
        you.
        </p>
        </div>
      </div>
        <Row>
          <Col lg={4} md={4} className='mb-5'>
          <Card
                className="shadow"
              >
                <div>
                  <Card.Img className="photo" variant="top" src='images/Ourstory/GREATS-Mens-Royale2.0-BlancoGreen-01_WEB.jpg' />
                  <Card.Img className="photo-2" variant="top" src='images/Ourstory/PDP-_0001_184-GREATS-SS23-Royale-2.0.jpg' />
                  <Card.Text>NEW</Card.Text>
                </div>
                <Card.Body>
                  <Card.Title><NavLink to="/Shop">Men's Royale 2.0</NavLink></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><BiDollar />189.00</Card.Subtitle>
                  
                  <hr/>
                  <NavLink to="/Shop">Quick Add</NavLink>
                </Card.Body>
          </Card>
              <div className='btn'>
                <NavLink to="/Shop">Look To Our Store</NavLink>
              </div>
          </Col>
          <Col className='photo-left1' lg={8} md={8}>
          </Col>
        </Row>
      </Container>
    </section>
    {/* End oursec-1 */}
    {/* Start oursec-2 */}
    <section className='oursec-2 mt-5'>
      <Container fluid className='total-card mx-5'>
      <div className='text-start after-card1'>
        <h1>Eco-Concious</h1>
        <div className='text-start'>
        <p>
        We care about what it takes to make something amazing, but it should not come at the cost of hurting the environment. As a brand, we value knowing better and making great choices. We are continuously taking steps to become more sustainable, including but not limited to: using 100% recyclable packaging, partnering with factories that use less resources in production, and incorporating biodegradable and recyclable materials across products.
        </p>
        </div>
      </div>
        <Row>
          <Col lg={4} md={4} className='mb-5'>
          <Card
                className="shadow text-sm-start text-center"
              >
                <div>
                  <Card.Img className="photo" variant="top" src='images/Ourstory/Mens-192-RoyaleKnit-EnviroKnit-Navy-White-RENW-Product-101.jpg' />
                  <Card.Img className="photo-2" variant="top" src='images/Ourstory/Mens-192-RoyaleKnit-EnviroKnit-Navy-White-RENW-Detail-102.jpg' />
                  <Card.Text>SALE</Card.Text>
                </div>
                <Card.Body>
                  <Card.Title><NavLink to="/Shop">Men's Royale 2.0</NavLink></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><BiDollar />189.00</Card.Subtitle>
                  
                  <hr/>
                  <NavLink to="/Shop">Quick Add</NavLink>
                </Card.Body>
          </Card>
              <div className='btn'>
                <NavLink to="/Shop">Look To Our Store</NavLink>
              </div>
          </Col>
          <Col className='photo-left1' lg={8} md={8}>
          </Col>
        </Row>
      </Container>
    </section>
    {/* End oursec-2 */}

    <Footer />
    </>
  )
}

export default Ourstory