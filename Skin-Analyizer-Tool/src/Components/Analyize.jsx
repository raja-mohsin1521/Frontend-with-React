import React, { useState } from "react";

import ImageUpload from "./ImageUpload";
import AnalyizeContent from "./AnalyizeContent";

function Analyize(props) {
  const [src, setSrc] = useState("");
  const [upload, setUpload] = useState(false);
  function dragNdrop(event) {
    let src = event.target.value;
    setSrc(src);
    setUpload(true);
  }
  return (
    <>
      <div className="uploadOuter " id="Analyize">
        <span className="dragBox analizeimg">
          {!upload ? <AnalyizeContent /> : <ImageUpload src={src} />}
          <input type="file" onChange={dragNdrop} id="uploadFile1" />
        </span>
      </div>
    </>
  );
}

export default Analyize;
