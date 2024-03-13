import React from 'react'

import styled from 'styled-components'

function Cards(props) {
  return (
    <>
     <Card key={props.key} className="offset-1 col-10 col-sm-6 col-md-3 py-4 card my-4">
        <div className="row">
            <div className="col">
            <img src={props.src} className='img-fluid' alt="" />
            <h1 className='display-6'>{props.title}</h1>
            <p>{props.disc}</p>
            <div className="row text-end">
                <div className="col">
                    <p className='btn btn-danger'>{props.price}</p>
                </div>
            </div>
            </div>
        </div>
        
        </Card> 
    </>
  )
}



export default Cards

const Card=styled.div`
background-color: rgba(0,0,0, 0.5);

    color: #ffffff;
    h1{
        font-weight: 400;
    }
`