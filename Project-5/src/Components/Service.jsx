import React from 'react'


function Service(props) {
  return (
    <>
        <div className="col-md-3 col-sm-5 my-3 py-3 px-3 service " id="video-converter">
          <img
            src={props.src}
            className="img-fluid"
            alt=""
          />
          <p className="mx-3">Free </p>
          <h5 className="mx-3">{props.title}</h5>
          <hr />
          <div className="row text-end">
            <div className="col">
              <button className="btn btn-primary" onClick={props.click} id="btn-a">{props.selectbtntext}</button>
            </div>
          </div>
        </div>
    </>
  )
}



export default Service

