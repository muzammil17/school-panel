import React from "react";

const SelectComponent = ({ title, options, disabledOption, name, handleChange }) => {
  return (
    <div className="row">
      <div className="col-sm-12 formInput">
        <div className="form-group">
          <label htmlFor="sel1" className="semi-bold">
            {title} :
          </label>
          <select
            className="form-control select"
            id="sel1"
            name={name}
            onChange={handleChange}
            defaultValue={title}
          >
            <option disabled>{disabledOption}</option>
            {options && options.map((option, i) => <option key={i}>{option}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
