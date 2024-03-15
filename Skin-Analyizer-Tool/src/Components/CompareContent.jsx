import React from "react";
import styled from "styled-components";

function CompareContent() {
  return (
    <>
      <Content className="content2">
      Drag & drop files here to upload
        <br />
        <span>or</span>
        <br />
        <label className="btn" >
          Upload Image
        </label>
      </Content>
    </>
  );
}

export default CompareContent;
const Content=styled.div`
margin-top: 110px;
padding: 0px 25px;
font-size: 130%;
line-height: 1.5;
font-weight: 400;
  .btn{
    background-color:#66BCB9;
    color: white;
    margin-top:20px;
    font-size: 80%;
    padding: 10px 20px;
  }
`