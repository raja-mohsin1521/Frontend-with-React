import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid mt-5 pt-5" id="contact">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-6">
                <img src="/Images/Image (1).png" className="img-fluid" alt="" />
              </div>
              <div className="col-6 mt-5 pt-5">
                <img
                  src="/Images/Image.png"
                  className="img-fluid mt-5 pt-5"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="row mt-5">
              <h6 className="lead mb-4">
                Fill out your details and we’ll be in touch
              </h6>
              <h4 className="display-4 mb-5">Drop us a message</h4>
              <label htmlFor="name">
                Your name<span>*</span>
              </label>
              <input type="text" name="" id="name" />
              <label htmlFor="name">
                Your email address<span>*</span>
              </label>
              <input type="text" name="" id="name" />
              <label htmlFor="name">
                Message<span>*</span>
              </label>
              <textarea name="" id="message" cols="30" rows="14"></textarea>
              <div className="row">
                <div className="col">
                <button className="btn">Send Message</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <footer className="container-fluid pt-4 mt-5">
        <div className="row justify-content-around text-center">
          <div className="mt-2 col-md-4 order-md-1 order-3">
            <p>Copyright 2024. All rights are reserved</p>
          </div>
          <div className="col-md-4 order-md-2 order-1"><img src="/Images/41 Labs Logo-ai.png" className="img-fluid w-25" alt="" /></div>
          <div className="mt-2 col-md-4 order-md-3 order-2">
            <div className="row">
              <div className="col-md-6 text-md-end ">
                <p>Terms and conditions</p>
              </div>
              <div className="col-md-6 text-md-start">
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
