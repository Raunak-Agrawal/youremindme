import React from "react";
import "../../App.css";
const InputForm = props => {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper auth-page">
        <div
          className={
            "content-wrapper d-flex align-items-center auth" +
            " " +
            props.mode +
            "-bg-1 theme-one"
          }
        >
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputForm;
