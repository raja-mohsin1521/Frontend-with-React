import React from "react";

function Loader() {
  return (
    <>
      <div className="bg-image"></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-text ">
              <h2>Comparing Images</h2>
              <p>Just give us a second to process your image</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
