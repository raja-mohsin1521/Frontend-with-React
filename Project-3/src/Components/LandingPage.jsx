import React from 'react'
import styles from '../Components/Landingpage.module.css'



function LandingPage(props) {
  return (
    <>
    <div className={ `${styles.maincontainer} container`}  >
      <div className="row">
          <div className="col-md-6">
             
              <img src="/Images/dices 1.png" className='img-fluid' alt="dices" />
          </div>
          <div className="col-md-6  text-end">
          <h1 className={`${styles.mainheadnig} display-1`}>Dice Game</h1>
              <button className="btn btn-dark py-2 px-5 " onClick={props.toggle} >Play Now</button>
          </div>
      </div>
    </div>
  </>
  )
}



export default LandingPage

