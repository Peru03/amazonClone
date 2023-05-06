import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";



function App() {
  return (

    <div className="App">
      <Header/>
      {/* <Router> */}
 
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />     
       </Routes>
       
      {/* </Router> */}
    </div>
  );
}
 
export default App;
