import React, { useState } from "react";

import CompareContent from "./CompareContent";
import ImageUpload from "./ImageUpload";
import styled from "styled-components";

function Compare(props) {
  const [src1, setSrc1] = useState("");
  const [upload1, setUpload1] = useState(false);
  const [src2, setSrc2] = useState("");
  const [upload2, setUpload2] = useState(false);
  function dragNdrop1(event) {
    let src = event.target.files[0];
    setSrc1(URL.createObjectURL(src));
    setUpload1(true);
    props.imgurl1(src)
  }

  function dragNdrop2(event) {
    let src = event.target.files[0];
    setSrc2(URL.createObjectURL(src));
    setUpload2(true);
    props.imgurl2(src)
   
  }
  return (
    <>
      <Comparebox className="row text-center justify-content-center" id="Compare">
        <div className="col-md-6">
          <div className="uploadOuter Before">
            <h1 className="lead lables" >Before</h1>
            <div className="dragBox showimg2">
              {!upload1 ? <CompareContent /> : <ImageUpload src={src1} />}
              <input type="file" onChange={dragNdrop1} id="uploadFile2" />
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="uploadOuter After">
          <h1 className="lead lables">After</h1>
            <div className="dragBox showimg3">
              {!upload2 ? <CompareContent /> : <ImageUpload src={src2} />}
              <input type="file" onChange={dragNdrop2} id="uploadFile3" />
            </div>
          </div>
        </div>
      </Comparebox>
    </>
  );
}

export default Compare;



let Comparebox = styled.div`
width: 100%;
.lables{
font-size: 150%;
font-weight: 600;
margin-bottom: 10px;
}
.dragBox{
  background-color: #f1f2f3;
  border-radius: 20px;
  text-align: center;
  width: 110%;
  height: 50vh;
  margin: 0 auto;
  position: relative;
  text-align: center;
  overflow: hidden;
  line-height: 55px;
  color: #060e0e;
  border: 2px dashed #ccc;
  display: inline-block;
  transition: transform 0.3s;
  input[type="file"] {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    top: 0;
    left: 0;
  }

}
`;
