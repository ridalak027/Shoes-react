import React , { useState }from 'react'
import { auth , googleProvider} from "./config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Forgotpsw = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      console.log(auth?.currentUser?.email);
    const signIn = async () => {
      try {
      await createUserWithEmailAndPassword(auth, email, password);
      } catch (err){
        console.error(err);
      }
    };
    const signInWithGoogle = async () => {
      try {
      await signInWithPopup(auth,googleProvider);
      } catch (err){
        console.error(err);
      }
    };
    const logOut = async () => {
      try {
      await signOut(auth);
      } catch (err){
        console.error(err);
      }
    };
  
    return (
      <>
        <section className='logsec'>
          <Container>
            <Row>
              <Col className='text-center total-form pt-5 pb-5 shadow'>
                <h1>Forgot Password</h1>
                <hr/>
                <p className='error'></p>
                <p>
                Enter the email address for your account and we'll send you an email with instructions for resetting your password.
                </p>
                <input onChange={(e) => setEmail(e.target.value)} className='mb-4 py-2 ps-2' type='email' placeholder='Email'/><br />
                <NavLink className="logbtn3" to="/Home">Forgot Password</NavLink><br/><br/>
                <div className='mt-1 link'>
                <NavLink to="/Signin">Sign up instead?</NavLink>
                </div>
                <div className='d-flex justify-content-center mt-4 link'>
                <NavLink to="/Login"><ins>Log In.</ins></NavLink>
                </div>
              </Col>
            </Row>
          </Container>
          <Footer />
        </section>
      </>
    )
}

export default Forgotpsw