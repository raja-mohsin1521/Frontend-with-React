import React from "react";
import styled from "styled-components";

function Results(props) {
  return (
    <>
      <div className="container-fluid pb-5 " id="result">
        <div className="row text-center py-5">
          <div className="col-md-8 col-12 offset-md-2">
            <h5 className="lead mt-5">The Leading AI Acne Analyzer</h5>
            <h4 className="display-2 mt-3">
              Explore Ai Enhanced Skin Acne Analysis
            </h4>
            <p className="lead mt-4">
              Uncover the path to radiant skin with our revolutionary Acne
              Analyzer Tool. Say goodbye to guesswork and hello to personalized
              skincare solutions tailored just for you.
            </p>
          </div>
        </div>

        <div className="row mt-5 ">
          <Before className="col-md-6 col-12">
            <div className="row text-center">
              <div className="col">
                <img
                  src={props.response.image_before}
                  className="rounded-5"
                  alt=""
                />
              </div>
            </div>
            <div className="row data mt-5">
              <div className="col">
                <h3>
                  Skin Score:
                  <span className="text-danger mx-3 ">
                  {props.response.PercentageBefore}
                  </span>
                  <Box className="bg-danger ">{props.response.BeforeTreatmentSkinCondition}</Box>
                </h3>
                <h3 className="mt-4">Acne:</h3>
                <p>{props.response.Acne_Pimples}</p>
                <h3>Discription</h3>
                <p>{props.response.second_image_des}</p>
              </div>
            </div>
          </Before>
          <After className="col-md-6 col-12">
            <div className="row text-center">
              <div className="col">
                <img
                  src={props.response.image_after}
                  className="rounded-5"
                  alt=""
                />
              </div>
            </div>
            <div className="row data mt-5">
              <div className="col">
                <h3>
                  Skin Score:
                  <span className="text-success mx-3">
                  {props.response.PercentageAfter}
                  </span>
                  <Box className="bg-success">{props.response.AfterTreatmentSkinCondition}</Box>
                </h3>
                <h3 className="mt-4">Acne:</h3>
                <p>{props.response.Acne_Pimples}</p>
                <h3>Discription</h3>
                <p>{props.response.second_image_des}</p>
              </div>
            </div>
          </After>
        </div>
        <Conclusion className="row text-center mt-5 py-4" id="conclusion">
          <div className="col">
          <h6>Conclusion</h6>
          <p className="mt-3">{props.response.Conclusion}</p>
          <div className="row text-center mt-4"><div className="col">
          <button className="btn" onClick={props.hide}>Compare Again</button>
            </div></div>
          
          </div>
        </Conclusion>
      </div>
    </>
  );
}

export default Results;
const Box = styled.span`
  font-size: medium;
  color: #ffff;
  font-weight: 400;
  padding: 10px 20px;
  border-radius: 30px;
`;
const Before = styled.div`
.data{
  padding-left: 14%;
  width: 90%;
  h3{
    font-weight: 600;
  }
  p{
    font-size: 125%;
  }
}

`;
const After = styled.div`
 border-left: 1px solid;
 .data{
  padding-left: 14%;
  width: 90%;
}
h3{
    font-weight: 600;
  }
p{
    font-size: 125%;
  }
 
`;
const Conclusion = styled.div`
p{
  font-size: 120%;
  line-height: 1.3;
  font-weight: 300;
}
button{
  color: #66bcb9;
  font-weight: 400;
  font-size: 135%;
  background-color: white;
 
}
button:hover{
  background-color: black;
}
h6{
  font-size: 140%;
}
`