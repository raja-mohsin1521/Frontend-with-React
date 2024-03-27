import React from 'react'
import styled from 'styled-components'

function Nav() {
  return (
    <>
      <NavBar className="navbar navbar-expand-lg navbar-dark p-3  sticky-top" id="headerNav">
  <div className="container-fluid">
    <a className="navbar-brand d-block d-lg-none" href="#">
      <img src="" height="80" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <a className="nav-link mx-3 " aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#usage">Working</a>
        </li>
        <li className="nav-item d-none d-lg-block">
          <a className="nav-link mx-3" href="#home">
            <img src="/pics/caption.jpeg" height="50" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#about">About</a>
        </li>
      </ul>
    </div>
  </div>
</NavBar>
    </>
  )
}

export default Nav
const NavBar=styled.nav`
li a{
    font-size: large;

}

 `   