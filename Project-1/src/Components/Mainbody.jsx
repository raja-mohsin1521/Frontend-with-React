import React from "react";

export default function Mainbody() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mainheading" >YOUR FEET DESERVE THE BEST</h2>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="row">
              <div className="col">
                <button className="btn btn-danger">Shop Now</button>
              
            
                <button className="btn btn-dark mx-4">Catagory</button>
                
              </div>
              <div className="row">
                <div className="col-8 mt-4"><img src="/images/shops.png" className="img-fluid w-25" alt="" /></div>
              </div>
              
            </div>
          </div>
          <div className="col-md-6 order-first order-md-last mt-5 pt-5">
            <img src="/images/shoe_image.png" className="image-fluid" alt="" /></div>
        </div>
      </div>
    </>
  );
}
