import React, { useState } from "react";

import Compare from "./Compare";
import Analyize from "./Analyize";
import styled from "styled-components";
function LandingBody(props) {
  const [active, setActive] = useState(true);

  function toggleOptions1() {
    setActive(false);
  }
  function toggleOptions2() {
    setActive(true);
  }

  return (
    <>
      <MainBody blur={props.blur} className="container-fluid" id="main">
        <div className="container-fluid py-5" id="home">
          <div className="row mt-5">
            <div className=" col-lg-5 col-12">
              <h5 className="lead mt-5">The Leading AI Acne Analyzer</h5>
              <h4 className="display-2 mt-4 mainheading">
                Explore Ai Enhanced Skin Acne Analysis
              </h4>
              <p className="lead mt-4 mainpara">
                Uncover the path to radiant skin with our revolutionary Acne
                Analyzer Tool. Say goodbye to guesswork and hello to
                personalized skincare solutions tailored just for you.
              </p>
              <div className="row mt-5 ">
                <div className="col-md-4 col-6">
                  <h6 className="display-6">10k+</h6>
                  <p className="lead static">
                    Active Users
                  </p>
                </div>
                <div className="col-md-4 col-6">
                  <h6 className="display-6">200k+</h6>
                  <p className="lead static">
                    <b>Acne Analyzed</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 maincard col-12 ccontainer mt-4 mt-md-0">
              <div className="row text-center mb-5">
                <div className="card mb-5 offset-1 offset-lg-2 col-10">
                  <div className="row mt-5">
                    <div className="col">
                      <div className="switches">
                        <button
                          id="analyizebtn"
                          disabled
                          onClick={toggleOptions1}
                          className={!active ? "active" : ""}
                        >
                          Analyze Skin
                        </button>
                        <button
                          id="comparebtn"
                          onClick={toggleOptions2}
                          className={active ? "active" : ""}
                        >
                          Compare Results
                        </button>
                      </div>
                    </div>
                  </div>

                  {!active ? <Analyize /> : <Compare imgurl1={props.url1} imgurl2={props.url2} />}
                  <div className="row text-center">
                    <div className="col">
                      <button
                        className="btn my-3 mb-5"
                        onClick={props.show}
                        id="scanbtn"
                      >
                        Scan Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainBody>
    </>
  );
}

export default LandingBody;

const MainBody=styled.div`

  width: 98vw;
  overflow-x: hidden;
  padding:0px 0px  0px 5%;

  filter: ${props => props.blur ? 'blur(3px)' : 'blur(0px)'};
  -webkit-filter: ${props => props.blur ? 'blur(7px)' : 'blur(0px)'};
  .maincard{
    
  }
  @media (min-width:992px){
  .maincard{
    width: 55%;
  }
}
  .static{
    font-size: 150%;
    color: #060E0E;
  }
  .mainpara{
    line-height: 1.5;
    font-size: 170%;
  }
`