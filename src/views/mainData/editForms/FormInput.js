import React from "react";

const FormInput = (props) => {
  const { forlabel, Label, placeHolder, type, value, name, onChange } = props;
  return (
    <div className="row">
      <div className="col-sm-12 formInput">
        <label htmlFor={forlabel} className="semi-bold">
          {" "}
          {Label}{" "}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeHolder}
          defaultValue={value}
          onChange={onChange}
          className="py-2 px-3"
        />
      </div>
    </div>
  );
};

export default FormInput;
