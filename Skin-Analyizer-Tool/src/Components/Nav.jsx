import React, { useState } from "react";
import styled from "styled-components";

export default function Nav() {

  const[show,setShow]=useState(false)

  function togglenav(){
    setShow(prev=>!prev)
  }
  return (
    <>
      <div className="container-fluid" id="navbar">
        <div className="row justify-content-between">
          <div className="col-5 col-md-2 text-center">
            <img src="/Images/41 Labs Logo.ai.png" className="img-fluid w-75" alt="" />
          </div>
          <div className="col-7 nav-bar d-md-block d-none">
            <ul className="nav mr-auto justify-content-center">
              <li className="nav-item px-5">
                <a href="#main" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#working" className="nav-link">
                  How it works
                </a>
              </li>
              <li className="nav-item px-5">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 text-center">
            <div className="row">
              <div className="col">
                <a href="#contact">
                  <button className="btn btn-primary">Contact Us</button>
                </a>
                <button onClick={togglenav} className="btn btn-primary w-25 d-md-none togglebtn">
                  <img
                    src="/Images/three_10094376.png"
                    alt=""
                    width="25px"
                    className="img-fluid"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <MobileNav show={show} className="row text-center mobileview d-md-none">
          <div className="col text-center">
            <ul className="mb-5">
              <li className="nav-item pt-4 my-4">
                <a href="#main" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item my-4">
                <a href="#working" className="nav-link">
                  How it works
                </a>
              </li>
              <li className="nav-item my-4">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </div>
        </MobileNav>
      </div>
    </>
  );
}
const MobileNav=styled.div`
   height: ${props => props.show ? '30vh' : '0px'};
 background-color: #f1f9f8;
 overflow: hidden;
 transition: height 0.5s;
 font-size: 120%;
`