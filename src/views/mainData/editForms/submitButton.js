import React from "react";

const SubmitButton = ({onClick}) => {
  return (
    <div className="submitButton">
      <button type="submit" className="btn-primary px-5 py-3 ml-2" onClick={onClick}>Submit</button>
    </div>
  );
};

export default SubmitButton;
