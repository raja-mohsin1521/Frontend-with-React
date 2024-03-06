import React from 'react'

export default function Navbar() {
  return (
    <>
<div className="container-fluid">
    <div className="row mt-3 nav-bar">
<div className=" col-2 mx-5 px-5 ">
<img src="/images/brand_logo.png" alt="Logo"/>
</div>
<div className="offset-1 col-6">
<ul className='nav'>
    <li className="nav-item">
        <a href="" className='nav-link'>Home</a>
    </li>
    <li className="nav-item">
        <a href="" className='nav-link'>LOCATION</a>
    </li>
    <li className="nav-item">
        <a href="" className='nav-link'>ABOUT</a>
    </li>
    <li className="nav-item">
        <a href="" className='nav-link'>CONTACT</a>
    </li>
</ul>
</div>
<div className=" col-2 ">
<button className="btn btn-danger">Login</button>
</div>
    </div><hr />
    </div>  
    </>
  )
}
