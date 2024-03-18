import React from "react";

function Reviews() {
  return (
    <>
      <div className="container-fluid py-5" id="reviews">
        <div className="container-fluid my-5 pt-5" id="card">
          <div className="row mx-lg-5 text-center text-lg-start">
            <div className="col-lg-7">
              <h4 className="display-4 mt-lg-5 pt-4">
                Acne Analyzer Skincare With Intelligent
              </h4>
              <p className="lead mt-4">
                Brings A Revolutionary Approach To Skincare, Combining Advanced
                Technology With User-Friendly Features..
              </p>
              <button className="btn">Scan Now</button>
              <div className="row mb-5 ">
                <div className="col-lg-4 col-6">
                  <h4 className="display-4 mt-3">10k+</h4>
                  <p>Active Users</p>
                </div>
                <div className="col-lg-4 col-6">
                  <h4 className="display-4 mt-3">10k+</h4>
                  <p>Active Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
