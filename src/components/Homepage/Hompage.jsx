import React from "react";
import "./homepage.css";
import About from "../Container/About/About";
import Banner from "../Container/Banner/Banner";
import Header from "../header/Header";
import Details from "../details/Details";

function Hompage() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Details />
    </>
  );
}

export default Hompage;
