import React from 'react'
import styled from 'styled-components'
function About() {
  return (
    <>
         <AboutBox className="container screen7" id="about">
      
      <div className="row mb-5 pb-5">
        <div className="offset-sm-1 col-sm-6 mb-4">
          <img src="/pics/phone.png" className="img-fluid" alt="" />
        </div>
        <div className="col-sm-5">
          <h1 className="display-4 pt-sm-5 mt-sm-5">
            Avail our services <span>anytime</span> from anywhere
          </h1>
          <p className="d-md-flex d-none pt-3" >Experience the future of learning on the go with our state-of-the-art Machine Learning app. Seamlessly access and engage with courses anytime, anywhere. Modernize your learning experience, unlocking enhanced productivity.</p>
          <div className="row mt-5">
            <div className="col-5">
              <img src="/pics/appstore-copy.webp" className="img-fluid" alt="" />
            </div>
            <div className="col-4">
              <img
                src=""
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </AboutBox>
    </>
  )
}

export default About
const AboutBox=styled.div`
`