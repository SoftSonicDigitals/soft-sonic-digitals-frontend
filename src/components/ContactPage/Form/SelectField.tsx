import { FieldId, FormFields } from "@/models/contact_page";
import React from "react";
import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";
import FormDropDownOption from "./FormDropDownOption";

type SelectFieldProps = {
  fieldId: FieldId;
  maxLength?: number;
  label: string;
  errors: FieldErrors<FormFields>;
  register: UseFormRegister<FormFields>;
  customValidation?: ValidationRule<RegExp>;
  isRequired?: boolean;
  placeholder?: string;
  options: {
    title: string;
    value: string;
  }[];
};
const SelectField = ({
  options,
  fieldId,
  label,
  errors,
  register,
  isRequired = true,
}: SelectFieldProps) => {
  const capitalizeString = (str: string) => {
    const firstChar = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1).split("_").join(" ");
    return firstChar + restOfString;
  };

  return (
    <div className="flex flex-col gap-1 text-gray-700">
      <label htmlFor={fieldId} className="font-[600] text-sm">
        {label} {isRequired && <span className="text-red text-xl">*</span>}
      </label>

      <select
        id={fieldId}
        className={`relative border-[1px] ${
          errors[fieldId] ? "border-red" : "border-gray-600 "
        } w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
        {...register(fieldId, {
          required: isRequired
            ? `Please select the ${capitalizeString(fieldId)}`
            : false,
        })}
        defaultValue={""}
      >
        {options.map(({ value, title }, index) => (
          <FormDropDownOption value={value} title={title} key={index} />
        ))}
      </select>
      {errors[fieldId] && (
        <div className="text-sm font-[500] text-red mt-1">
          {errors[fieldId]?.message}
        </div>
      )}
    </div>
  );
};

export default SelectField;
