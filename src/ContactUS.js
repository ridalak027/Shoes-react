import React ,{useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactUS = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_apb68g9', 'template_hnhxigh', form.current, 'sKuHgBvgC1sLwl5NJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <section className="Contact">
        <Container>
          <Row className="total-contact">
            <Col md={4} sm={12} className="left">
              <div>
                <h1 className="mb-4">Contact Us</h1>
                <div className="d-flex">                  
                <MdEmail />
                <p>
                  <span className="titel">Email:</span> greats-info@gmail.com
                </p>
                </div>
                <div className="d-flex">                  
                <BsFillTelephoneFill />
                <p>
                  <span className="titel">Phone:</span> 213673141516
                </p>
                </div>
                <div className="d-flex">
                <FaMapMarkerAlt />
                <p>
                  <span className="titel">Address:</span> 24 kchida Batna 
                </p>
                </div>
              </div>
            </Col>
            <Col md={8} sm={12} className="right">
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="d-md-flex d-block text-md-center text-start">
                    <div>
                      <input className="mb-3 py-2 px-4" type="text" name="name" placeholder="Name" />
                      <br />
                      <input className="mb-3 py-2 px-4" type="text" name="phone" placeholder="Phone" />
                      <br />
                      <input className="mb-3 py-2 px-4" type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="ms-0 ms-sm-3">
                      <textarea className="p-3" name="message" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default ContactUS;
