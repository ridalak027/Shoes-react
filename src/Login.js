import React , { useState }from 'react'
import { auth , googleProvider} from "./config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  
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
              <h1>Log In</h1>
              <hr/>
              <p className='error'></p>
              <input onChange={(e) => setEmail(e.target.value)} className='mb-4 py-2 ps-2' type='email' placeholder='Email'/><br />
              <input onChange={(e) => setPassword(e.target.value)} className='mb-4 py-2 ps-2' type='password' placeholder='Password'/><br />
              <NavLink className="logbtn">Log In</NavLink><br/><br/>
              <NavLink className="logbtn" to="/Signin">Sign In</NavLink><br/><br/>
              <NavLink className="logbtn2" onClick={signInWithGoogle}> Signin with google</NavLink><br/>
              <div className='mt-3 link'>
              <NavLink to="/Forgotpsw">Forget your password?</NavLink>
              </div>
              <div className='d-flex justify-content-center mt-4 link'>
              <p>No account? </p><NavLink to="/Signin"><ins>Sign In.</ins></NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </section>
    </>
  )
}

export default Login