import React from "react";
import styled from "styled-components";

function ImageUpload(props) {
  return (
    <div>
      <Image
        src={props.src}
        alt={props.src}
       
        className="img-fluid"
      />
      
    </div>
  );
}

export default ImageUpload;
const Image=styled.img`
  height:50vh ;
  width: 100%;
`