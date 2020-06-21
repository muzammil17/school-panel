import React from "react";

const SubmitButton = (props) => {
  return (
    <div className="submitButton">
      <button className="btn-primary px-5 py-3 ml-2" onClick={props.onClick}>Submit</button>
    </div>
  );
};

export default SubmitButton;
