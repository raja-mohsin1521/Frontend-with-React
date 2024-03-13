import React from 'react'
import styled from 'styled-components'

function Top(props) {
    
  return (
    <>
    <Bar className="container-fluid">
        <div className="row text-center">
            <div className="col-12 col-md-6">
                <img src="/Images/Foody Zone.svg" className='img-fluid' alt="aaaa" />
            </div>
            <div className="col-12 col-md-6">
                <input type="search" onChange={props.search} placeholder='Search Food....' className='' name="" id="" />
            </div>
        </div>
        <div className="row text-center">
            <div className="col"> {props.filter.map((value,i)=>
<button className='btn btn-danger' onClick={()=>props.btn({value})} key={i}>{value}</button>
                
            )}</div>
           
            
        </div>
    </Bar>
      
    </>
  )
}



export default Top

const Bar =styled.div`
    background-color: #323334;
    padding-top: 40px ;

    input{
        padding:10px 30px;
        border-radius: 8px;
        border:1px solid red;
        background: transparent;
        color: #ffffff;

    }
    button{
        background-color: red;
        margin: 30px 4px;
  
    }
   
`

