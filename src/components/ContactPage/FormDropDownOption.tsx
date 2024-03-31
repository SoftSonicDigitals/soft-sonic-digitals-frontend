import React from "react";
type FormDropDownOptionType = {
  title: string;
  value: string;
};

const FormDropDownOption = ({ title, value }: FormDropDownOptionType) => {
  return (
    <>
      {value === "" ? (
        <option value="" disabled>
          {title}
        </option>
      ) : (
        <option value={value}>{title}</option>
      )}
    </>
  );
};

export default FormDropDownOption;
