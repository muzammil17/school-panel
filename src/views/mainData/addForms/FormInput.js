import React from "react";

const FormInput = (props) => {
  const { forlabel, Label, placeHolder, type, onChange, name, ref } = props;
  return (
    <div className="row">
      <div className="col-sm-12 formInput">
        <label htmlFor={forlabel} className="semi-bold">
          {" "}
          {Label}{" "}
        </label>
        <input
          type={type}
          placeholder={placeHolder}
          onChange={onChange}
          name={name}
          ref={ref}
          className="py-2 px-3"
        />
      </div>
    </div>
  );
};

export default FormInput;
