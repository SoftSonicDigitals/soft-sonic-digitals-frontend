import React from "react";
import { SelectField as EditSelectFieldProps } from "@/models/contact_page";
import { FormDropDownOption } from "@/components/ContactPage";

const EditSelectField = ({
  options,
  fieldId,
  label,
  errors,
  register,
  isRequired = true,
}: EditSelectFieldProps) => {
  const capitalizeString = (str: string) => {
    const firstChar = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1).split("_").join(" ");
    return firstChar + restOfString;
  };

  return (
    <div className="flex py-4 border-b-2 first:border-t-2">
      <label className="text-sm font-[700] w-32 text-gray-700">{label}</label>

      <select
        id={fieldId}
        className={`appearance-none focus:outline-none px-3 py-1 border-[1px] ${
          errors[fieldId] ? "border-red" : "border-gray-600 "
        }text-sm rounded-md`}
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

export default EditSelectField;
