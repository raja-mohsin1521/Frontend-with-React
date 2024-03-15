import React from "react";
import styled from "styled-components";

function About() {
  return (
    <>
      <AboutBox className="container-fluid" id="about">
        <div className="row">
          <div className="col-md-6 text-a col-12 text-md-start text-center mt-md-5 pt-3 ">
            <h6 className="lead mt-5">About</h6>
            <h4 className="display-5 text-capitalize mt-4">
              helping you make informed decisions effortlessly
            </h4>
            <p className="mt-4">
              Welcome to Acne Insight, where innovation meets skincare analysis!
              Our mission is to empower individuals on their skincare journey by
              offering advanced tools for understanding and optimizing skin
              health. Our intelligent algorithms surpass conventional methods,
              providing in-depth skin condition analysis with a confidence
              score. We assist you in uncovering personalized skincare insights,
              helping you make informed decisions effortlessly. Immerse yourself
              in a realm of tailored solutions that enhance your skincare
              strategy, ensuring your skin concerns are not just acknowledged
              but understood. Join us on this expedition to unlock the full
              potential of your skincare routine and make a lasting impact on
              your skin's well-being. 
            </p>
            <ul className="mt-4">
              <li>
                <b>
                  Tailored solutions for enhanced skincare: Explore personalized
                  strategies to address specific skin concerns effectively.
                </b>
              </li>
              <li>
                <b>
                  Tailored solutions for enhanced skincare: Explore personalized
                  strategies to address specific skin concerns effectively.
                </b>
              </li>
              <li>
                <b>
                  Tailored solutions for enhanced skincare: Explore personalized
                  strategies to address specific skin concerns effectively.
                </b>
              </li>
            </ul>
            <div className="row text-md-start">
              <div className="col mb-5">
              <button className="btn mb-5">Scan Now</button>
              </div>
           
            </div>
          </div>

          <div className="col-md-6 col-12 text-md-start text center mt-md-0 mt-5">
            <img src="/Images/Aboutmain.png" alt="" className="img-fluid " />
          </div>
        </div>
      </AboutBox>
    </>
  );
}

export default About;
const AboutBox=styled.div`
@media (min-width:992px) {
  .text-a{
  width: 45%;
  margin-left: 36px;
  margin-right: 36px;
}
}

  #about h6 {
  font-size: 220%;
  font-weight: 500;
  color: #66bcb9;
}
#about h4 {
  font-weight: 600;
}
#about li {
  font-weight: 400;
  list-style: url("/Images/tick-circle.png");

  
}
#about button {
  background-color: #66bcb9;
  width: 50%;
  height: 78px;

  gap: 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 150%;
  border-radius: 15px;
}
p{
  line-height: 1.5;
  font-size: 130%;
}
`