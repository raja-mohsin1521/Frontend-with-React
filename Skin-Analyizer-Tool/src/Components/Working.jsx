import React from "react";
import styled from "styled-components";

function Working() {
  return (
    <>
      <WorkingBox className="container-fluid pt-5 pb-4" id="working">
        <div className="row text-center my-5">
          <div className="offset-1 col-10">
            <h6 className="lead mainsub">How It Works</h6>
            <h4 className="display-5 my-4  ">
              Analyze Your Skin Acne In 3 Simple Steps
            </h4>
            <div className="row text-center justify-content-around mt-5 pt-4">
              <div className="col-sm-4 step">
                <img src="/Images/fi_3945469 (1).png" className="img-fluid" alt="" />
                <h6 className="lead mt-4 submain">Upload Image</h6>
                <p className="mt-3">
                  In in urna pretium, facilisis ante a, tristique quam. Integer
                  a eros vehicula
                </p>
              </div>
              <div className="col-sm-4  step">
                <img src="/Images/fi_11847174.png" className="img-fluid" alt="" />
                <h6 className="lead mt-4 submain">Get Analyzed Results</h6>
                <p className="mt-sm-3">
                  In in urna pretium, facilisis ante a, tristique quam. Integer
                  a eros vehicula
                </p>
              </div>
              <div className="col-sm-4  mt-4 mt-sm-0 step">
                <img src="/Images/fi_2910751.png" className="img-fluid" alt="" />
                <h6 className="lead mt-4 submain">Acne-Free Skin</h6>
                <p className="mt-3">
                  In in urna pretium, facilisis ante a, tristique quam. Integer
                  a eros vehicula
                </p>
              </div>
            </div>
          </div>
        </div>
      </WorkingBox>
    </>
  );
}

export default Working;
const WorkingBox=styled.div`
  .mainsub{
    font-size: 160%;
    line-height: 1;
    
  }
  .submain{
    font-size: 150%;
    line-height: 1;
  }
  .step{
    
    @media (min-width:574px){
      width: 28%;
    }
    li
    p{
      font-size: 120%;
      line-height: 1;
      font-weight: 300;
    }
  }
`