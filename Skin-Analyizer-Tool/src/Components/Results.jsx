import React from "react";
import styled from "styled-components";

function Results(props) {
  return (
    <>
      <div className="container-fluid pb-5 " id="result">
        <div className="row text-center py-5">
          <div className="col-md-8 col-12 offset-md-2">
            <h5 className="lead mt-5">The Leading AI Acne Analyzer</h5>
            <h4 className="display-3 mt-3">
              Explore Ai Enhanced Skin Acne Analysis
            </h4>
            <p className="lead mt-4">
              Uncover the path to radiant skin with our revolutionary Acne
              Analyzer Tool. Say goodbye to guesswork and hello to personalized
              skincare solutions tailored just for you.
            </p>
          </div>
        </div>

        <div className="row mt-5 pt-5">
          <Before className="col-md-6 col-12">
            <div className="row text-center">
              <div className="col">
                <img
                  src="/Images/Group 1000001436 (1).png"
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
                   23%
                  </span>
                  <Box className="bg-danger ">Alarming</Box>
                </h3>
                <h3 className="mt-4">Acne:</h3>
                <p>The bounding area is showing the acne spots on skin.</p>
                <h3>Discription</h3>
                <p>Convallis duis sodales integer in arcu aliquet amet sed. Fusce gravida lectus proin nunc at congue. Posuere orci in luctus tincidunt. At nullam risus sed viverra ut. Consectetur arcu.</p>
              </div>
            </div>
          </Before>
          <After className="col-md-6 col-12">
            <div className="row text-center">
              <div className="col">
                <img
                  src="/Images/Group 1000001436.png"
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
                   64%
                  </span>
                  <Box className="bg-success">Average</Box>
                </h3>
                <h3 className="mt-4">Acne:</h3>
                <p>The bounding area is showing the acne spots on skin.</p>
                <h3>Discription</h3>
                <p>Convallis duis sodales integer in arcu aliquet amet sed. Fusce gravida lectus proin nunc at congue. Posuere orci in luctus tincidunt. At nullam risus sed viverra ut. Consectetur arcu.</p>
              </div>
            </div>
          </After>
        </div>
        <Conclusion className="row text-center mt-5 py-5" id="conclusion">
          <h6>Conclusion</h6>
          <p className="mt-3">Ultrices id nibh purus iaculis nisi. Vitae amet porttitor eget laoreet pharetra a. Placerat sed fringilla amet neque. Quis massa rutrum eget consequat amet in. Justo quam orci sed mi. Congue auctor nam nunc porta lacus.
Lobortis fringilla ut pretium tellus amet eget lectus velit at. Varius phasellus adipiscing commodo tellus massa habitasse in sagittis. Ut ultricies augue posuere justo amet.</p>
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
h6{

}
`