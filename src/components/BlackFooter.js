import React from "react";
import "./BlackFooter.css";

function BlackFooter() {
  return (
    <div className="black_footer">
      <h2 className="q_number">
        Questions? Call <span>000-800-040-1843</span>
      </h2>
      <div className="container">
        <div className="row black_footer_items">
          <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 ">
            <p className="black_footer_item">FAQ</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 ">
            <p className="black_footer_item">Help Centre</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 ">
            <p className="black_footer_item">Terms of Use</p>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 ">
            <p className="black_footer_item">Privacy</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 ">
            <p className="black_footer_item">Cookie Preferences</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 ">
            <p className="black_footer_item">Corporate Information</p>
          </div>
        </div>
        <div class="dropdown">
        <div class="dropdown-content">
            <a href="/">English</a>
          </div>
          <button class="drop_btn">
            <img src="../images/global.svg" alt="glob" class="global" />
            English
            <img
              src="../images/drop_arrow.svg"
              alt="drop"
              className="drop_arrow"
            />
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default BlackFooter;
