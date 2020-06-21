import React from "react";

const LoadingButton = (props) => {
  return (
    <div className="submitButton">
      <button className="btn-primary px-5 py-3 ml-2">
        <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
      </button>
    </div>
  );
};

export default LoadingButton;
