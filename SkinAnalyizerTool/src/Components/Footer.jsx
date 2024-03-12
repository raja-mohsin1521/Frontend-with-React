import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <>
       <div class="container-fluid mt-5 pt-5" id="contact">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-6">
              <img src="images/Image (1).png" class="img-fluid" alt="" />
            </div>
            <div class="col-6 mt-5 pt-5">
              <img src="images/Image.png" class="img-fluid mt-5 pt-5" alt="" />
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="row mt-5">
            <h6 class="lead mb-4">
              Fill out your details and we’ll be in touch
            </h6>
            <h4 class="display-4 mb-5">Drop us a message</h4>
            <label for="name">Your name<span>*</span></label>
            <input type="text" name="" id="name" />
            <label for="name">Your email address<span>*</span></label>
            <input type="text" name="" id="name" />
            <label for="name">Message<span>*</span></label>
            <textarea name="" id="message" cols="30" rows="14"></textarea>
          </div>
        </div>
      </div>
    </div>

    <footer class="container-fluid pt-4 mt-5">
      <div class="row justify-content-around text-center">
        <div class="col-4">
          <p>Copyright 2023. All rights are reserved</p>
        </div>
        <div class="col-4">aaaaaa</div>
        <div class="col-4">
          <div class="row">
            <div class="col-6 text-end">
              <p>Terms and conditions</p>
            </div>
            <div class="col-6 text-start">
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}



export default Footer

