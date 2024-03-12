import React from 'react'
import PropTypes from 'prop-types'

const LandingContainer = props => {
  return (
    <div>
        <div class="container-fluid" id="main">
      <div class="container-fluid py-5" id="home">
        <div class="row mt-5">
          <div class="px-md-5 mx-md-5 col-lg-5 col-12">
            <h5 class="lead mt-5">The Leading AI Acne Analyzer</h5>
            <h4 class="display-3 mt-5">
              Explore Ai Enhanced Skin Acne Analysis
            </h4>
            <p class="lead mt-4">
              Uncover the path to radiant skin with our revolutionary Acne
              Analyzer Tool. Say goodbye to guesswork and hello to personalized
              skincare solutions tailored just for you.
            </p>
            <div class="row mt-4 text-center">
              <div class="col-md-4 col-6">
                <h6>10k+</h6>
                <p class="lead"><b>Active Users</b></p>
              </div>
              <div class="col-md-4 col-6">
                <h6>10k+</h6>
                <p class="lead"><b>Active Users</b></p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 ccontainer mt-4 mt-md-0">
            <div class="row text-center mb-5">
              <div class="card mb-5 offset-1 col-10">
                <div class="row mt-5">
                  <div class="col">
                    <div class="switches">
                      <button id="analyizebtn" disabled class="">
                        Analyze Skin
                      </button>
                      <button id="comparebtn" class="active">
                        Compare Results
                      </button>
                    </div>
                  </div>
                </div>

                <div class="uploadOuter d-none" id="Analyize">
                  <span
                    class="dragBox analizeimg"
                    ondragover="drag()"
                    ondrop="drop()"
                  >
                    Darg and Drop image here
                    <br /><strong>OR</strong><br />
                    <label for="uploadFile1" class="btn" id="uploadbtn1"
                      >Upload Image</label
                    >

                    <input
                      type="file"
                      onchange="handleFileUpload1(this)"
                      id="uploadFile1"
                    />
                  </span>
                </div>

                <div class="row" id="Compare">
                  <div class="col-sm-6">
                    <div class="uploadOuter Before">
                      <span class="dragBox2 showimg2">
                        <div class="content2">
                          Darg and Drop image here
                          <br /><strong>OR</strong><br />
                          <label for="uploadFile2" class="btn" id="uploadbtn2"
                            >Upload Image</label
                          >
                        </div>
                        <input
                          type="file"
                          onChange={props.dragNdrop2()}
                          ondragover="drag()"
                          ondrop="drop()"
                          id="uploadFile2"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="uploadOuter After">
                      <span class="dragBox3 showimg3">
                        <div class="content3">
                          Darg and Drop image here
                          <br /><strong>OR</strong><br />
                          <label for="uploadFile3" class="btn" id="uploadbtn3"
                            >Upload Image</label
                          >
                        </div>
                        <input
                          type="file"
                          onChange="dragNdrop3(event)"
                          ondragover="drag()"
                          ondrop="drop()"
                          id="uploadFile3"
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div class="row text-center">
                  <div class="col">
                    <button class="btn my-3 mb-5" id="scanbtn">Scan Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}



export default LandingContainer
