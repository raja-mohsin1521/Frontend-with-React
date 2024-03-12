import React from 'react'

function Navbar() {
  return (
    <div>
      <div class="container-fluid" id="navbar">
      <div class="row justify-content-between">
        <div class="col-5 col-md-2 text-center">
          <img src="/images/Logo.png" class="img-fluid w-75" alt="" />
        </div>
        <div class="col-7 nav-bar d-md-block d-none">
          <ul class="nav mr-auto justify-content-center">
            <li class="nav-item px-5">
              <a href="#start" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">About</a>
            </li>
            <li class="nav-item px-5">
              <a href="#reviews" class="nav-link">Vision</a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 text-center">
          <div class="row">
            <div class="col">
              <a href="#contact">
                <button class="btn btn-primary">Contact Us</button></a
              >
              <button class="btn btn-primary w-25 d-md-none togglebtn">
                <img
                  src="/images/three_10094376.png"
                  alt=""
                  width="25px"
                  class="img-fluid"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center mobileview d-md-none">
        <div class="col">
          <ul class="mb-5">
            <li class="nav-item pt-4 my-4">
              <a href="#start" class="nav-link">Home</a>
            </li>
            <li class="nav-item my-4">
              <a href="#working" class="nav-link">How it works</a>
            </li>
            <li class="nav-item my-4">
              <a href="#about" class="nav-link">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
