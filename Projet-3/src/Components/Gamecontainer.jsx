import React ,{useState} from 'react'

import styled from 'styled-components'
import Dice from './Dice'


function Gamecontainer() {
    const num=[1,2,3,4,5,6]
    const [score,setScore]=useState(0)
    const [selectedNumber,setSelectedNumber]=useState(1)
    const[val,setVal]=useState(1)
    function clear(){
      setScore(0)
    }
  function game(){
   
      if(selectedNumber==val){
        setScore(score+1)

     
    }
    else{
      setScore(score-1)
    }
  }
  return (
    <>
      <div className=' container mt-5' >
        <div className="row justify-content-between text-center">
            <div className="col-2 text-center">
                <h1>{score}</h1>
                <p>Score</p>
            </div>
            <div className="col-12 col-md-8 text-end" >
                <div className="row text-center mx-5">
                   
                    {num.map((value,i)=>
                    <Box  className='col-2 col-md-1'
                    isselected={value==selectedNumber}
                    onClick={()=>setSelectedNumber(value)} key={i}>
                        <h1>{value}</h1>

                    </Box>
                   )}
                </div>
            </div>
        </div>
        <div className="row">
          <div className="col mt-5 pt-5">
            <Dice   val={val} setVal={setVal} game={game} clear={clear}/>
            
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Gamecontainer

const Box= styled.div`
    background-color: ${(props)=>!props.isselected? "white":"black"};
    color: ${(props)=>props.isselected? "white":"black"};
    cursor: pointer;
    margin: 0px 5px;

`