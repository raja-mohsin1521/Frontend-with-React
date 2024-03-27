import React, { useState } from 'react'
import Generatebtns from './Generatebtns'


function ServiceBox(props) {

  



function urlvalue(event){
props.url(event.target.value)
}

  return (
    <>
   
       <div className="col-md-6">
              <div className="row">
                <h1 className="display-5 mt-md-5 mt-3 pt-md-5 ">{props.heading}</h1>
                <p className="lead pb-md-3" >{props.para}</p>
                <div className="col">
                  <div className="form-floating mb-3">

                   <input type="text" className="form-control" onChange={urlvalue}  placeholder="Enter Video Url" />
      <label htmlFor="floatingInputGrid">Video Url</label>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col">
             <Generatebtns btnstate='primary' result={props.result}  btn={props.btn1}  />
             {props.secondbtn? <Generatebtns btnstate='danger'  result={props.result} btn={props.btn2}  />:<></>}
                </div>
              </div>
             
              
            </div>
            <div className="offset-md-0 offset-2 col-md-5 col-10  mt-3 mt-md-0  pt-md-0 order-first">
              <img src={props.img} className="img-fluid h-75  mt-5 rounded-5  pt-2" alt=""/>
            </div>
     
    </>
  )
}



export default ServiceBox

