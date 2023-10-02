import React from "react";
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsTwitter , BsYoutube} from 'react-icons/bs';


const Footer = () => {
  return (
    <>
      <section className="footer py-5">
        <Container>
          <Row>
            <div className="col-12 col-sm-4 mt-5 left text-center text-sm-start">
              <form>
                <h1>Stay In The Know</h1>
                <p>
                  Sign up to get first dibs on new launches,
                  promos, 20% off
                  your first purchase, and other news.
                </p>
                <div className="d-md-flex d-block botn">
                    <NavLink to="/Men">Subscribe</NavLink>
                </div>
              </form>
            </div>

            <div className="col-sm-2 col-4 offset-0 offset-sm-2 mt-5 text-center text-sm-start">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-2 col-4 mt-5 text-center text-sm-start">
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2 mt-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-2 col-4 mt-5 text-center text-sm-start">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-md-flex d-block justify-content-between text-center text-sm-start py-4 mt-5 bottom">
              <ul className="list-unstyled d-flex me-5 mt-2">
                <li className="inst ms-5 ms-sm-0">
                  <NavLink to="/Men"><AiOutlineInstagram /></NavLink>
                </li>
                <li className="ms-2 fb">
                  <NavLink to="/Men"><BiLogoFacebook /></NavLink>
                </li>
                <li className="ms-2 twiter">
                  <NavLink to="/Men"><BsTwitter /></NavLink>
                </li>
                <li className="ms-2 me-5 yt">
                  <NavLink to="/Men"><BsYoutube /></NavLink>
                </li>
              </ul>
                <NavLink to="/"><img className="ms-5 d-none d-lg-block" src="images/Logo/téléchargement-removebg-preview.png" /></NavLink>
                <NavLink to="/"><p className="mt-2 me-3">&#174; 2023 All Rights Reserved.</p></NavLink>
                <NavLink to="/"><p className="mt-2 me-3 right-text">Privacy Policy</p></NavLink>
                <NavLink to="/"><p className="mt-2 me-3 right-text">Terms & Conditions</p></NavLink>
                <NavLink to="/"><p className="mt-2 me-3 right-text">Do Not Sell or Share My Personal Information</p></NavLink>
                <NavLink to="/"><p className="mt-2 me-3 right-text">Data Privacy Portal</p></NavLink>
                <NavLink to="/"><p className="mt-2 me-3 d-md-none d-block">&#174; 2023 All Rights Reserved.</p></NavLink>
                <NavLink to="/"><img className="ms-5 d-md-none d-block" src="images/Logo/téléchargement-removebg-preview.png" /></NavLink>
            </div>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
