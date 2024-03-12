import React, {useState} from "react";



function Dice(props) {
const[val,setVal]=useState(1)
    function random(){
        let x =Math.floor(Math.random()*6)+1
    console.log (x)
    props.setVal(x)

    }
    function main(){
        random()
        props.game()
    }
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <img src={`/Images/dice_`+props.val+`.png`} onClick={main} className="img-fluid" alt="" />
            <h4>Click to roll dice</h4>
            <button className="btn btn-dark" onClick={props.clear}>Reset Score</button>
          </div>
         
         
        </div>
      </div>
    </>
  );
}

export default Dice;
