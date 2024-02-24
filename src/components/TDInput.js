import React from "react";

const TDInput = (props) => {
  return (
    <>
      <label className="text-sm text-gray-500 font-bold"> {props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.formControlName}
        className="block border-gray-300 text-[13px] pt-1 p-1 pl-3 rounded-md focus:outline-none 
            focus:ring-0 
            w-full focus:outline-0 border focus:border-green-900 focus:border-2 duration-300"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
      />
    </>
  );
};

export default TDInput;
