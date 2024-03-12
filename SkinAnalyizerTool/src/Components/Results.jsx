import React from 'react'
import PropTypes from 'prop-types'

const Results = props => {
  return (
    <>
    <div class="container-fluid pb-5 " id="result">
    <div class="row text-center py-5">
<div class="col-md-8 col-12 offset-md-2">
  <h5 class="lead mt-5">The Leading AI Acne Analyzer</h5>
  <h4 class="display-3 mt-3">Explore Ai Enhanced Skin Acne Analysis</h4>
  <p class="lead mt-4" >
    Uncover the path to radiant skin with our revolutionary Acne
    Analyzer Tool. Say goodbye to guesswork and hello to personalized
    skincare solutions tailored just for you.
  </p>
</div>
</div>

<div class="row mt-5 pt-5">
<div class="col-md-6 col-12">
  <div class="row text-center">
    <div class="col">
      <img src='data:image/png;base64,` +  data.image_before+`' class="rounded-5" alt="" />
    </div>
  </div>
  <div class="row mx-5 px-lg-5 mt-5">
    <div class="col">
      <h3>
        Skin Score: <span class="text-danger"> data.PercentageBefore</span>
        <span
          class="bg-danger tags"
         
          >Alarming</span
        >
      </h3>
      <h3>Acne:</h3>
      <p>
       data.Acne_pimples
      </p>
      <h3>Discription</h3>
      <p>
      data.first_image_des
      </p>
    </div>
  </div>
</div>
<div class="col-md-6 col-12">
  <div class="row text-center">
    <div class="col">
      <img src='data:image/png;base64,` +  data.image_after+`' class="rounded-5" alt="" />
    </div>
  </div>
  <div class="row mx-5 px-lg-5 mt-5">
    <div class="col">
      <h3>
        Skin Score: <span class="text-success">` +  data.PercentageAfter+`</span>
        <span
          class="bg-success tags"
        
          
          >Average</span
        >
      </h3>
      <h3>Acne:</h3>
      <p>
     ssdsdsdsds
      </p>
      <h3>Discription</h3>
      <p>
       data.second_image_des
      </p>
    </div>
  </div>
</div>
</div>
<div class="row text-center mt-5 py-5" id="conclusion">
<h6>Conclusion</h6>
<p >
  data.conclusion
</p>
</div>
      </div>
      
    </>
  )
}



export default Results
