import React, { useEffect, useState } from 'react'
/* import Library */
import PulseLoader from "react-spinners/PulseLoader";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/* import Components */
import Home from './Home';
import NavBar from './NavBar';
import Sale from './Sale';
import NewArrivals from './NewArrivals';
import Ourstory from './Ourstory';
import Women from './Women';
import Man from './Man';
import ContactUS from './ContactUS';
import Login from './Login';
import Cart from './Cart';
import Signin from "./Signin";
import Forgotpsw from "./Forgotpsw";


import './App.css';

const App = () => {
    const [loading , setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },3000)
    },[])
    
  return (
    <BrowserRouter>
    {loading ?
       <div className='preloaderr'>
        <PulseLoader color="#000000" height={100} margin={10} className='loading'/>
       </div> :
      <>
       <NavBar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Man" element={<Man />} />
         <Route path="/Women" element={<Women />} />
         <Route path="/Ourstory" element={<Ourstory />} />
         <Route path="/NewArrivals" element={<NewArrivals />} />
         <Route path="/Sale" element={<Sale />} />
         <Route path="/ContactUS" element={<ContactUS />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/Signin" element={<Signin />} />
         <Route path="/Forgotpsw" element={<Forgotpsw />} />
         <Route path="/Cart" element={<Cart />} />
       </Routes>
      </>
    }
   </BrowserRouter>
  )
}

export default App
