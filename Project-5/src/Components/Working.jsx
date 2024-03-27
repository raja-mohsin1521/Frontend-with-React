import React from 'react'

function Working() {
  return (
    <>
       <div className="container screen3 mt-5 pt-5" id="usage">
      <div className="row my-5 text-center text-capitalize">
        <h3 >How it works?</h3>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <img
            src="/pics/216ad0da-75f9-4e24-b6ec-477afe3dc6c2.svg"
            className="img-fluid"
            alt=""
          />
          <p className="lead"></p>
          <p>Select Service</p>
          <p className="disc">
            Select the desired service you want to avail
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="/pics/dc2e5664-c90b-47d3-ad86-4860d869b733.svg"
            className="img-fluid"
            alt=""
          />
          <p className="lead"></p>
          <p>Paste URL</p>
          <p className="disc">
            Patse the url and the required amount of data
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="/pics/216ad0da-75f9-4e24-b6ec-477afe3dc6c2.svg"
            className="img-fluid"
            alt=""
          />
          <p className="lead"></p>
          <p>Get the Answer</p>
          <p className="disc">
            Get the relevent ansewer form our very responsive bot
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Working
