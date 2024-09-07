import { FieldId, FormFields } from "@/models/contact_page";
import React from "react";
import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";

// Extract the type for id values

type InputFieldProps = {
  fieldId: FieldId;
  maxLength?: number;
  label: string;
  errors: FieldErrors<FormFields>;
  register: UseFormRegister<FormFields>;
  customValidation?: ValidationRule<RegExp>;
  isRequired?: boolean;
  placeholder?: string;
};

const InputField = ({
  fieldId,
  label,
  errors,
  maxLength,
  register,
  customValidation,
  isRequired = true,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1 text-gray-700">
      <label htmlFor={fieldId} className="font-[600] text-sm">
        {label} {isRequired && <span className="text-red text-xl">*</span>}
      </label>
      <div>
        <input
          maxLength={maxLength}
          type="text"
          id={fieldId}
          placeholder={placeholder}
          className={`relative border-[1px] ${
            errors[fieldId] ? "border-red" : "border-gray-600 "
          } w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
          {...register(fieldId, {
            required: isRequired ? `${label} is required` : false,
            maxLength: maxLength ? maxLength : undefined,
            pattern: customValidation ? customValidation : undefined,
          })}
        />
        {errors[fieldId] && (
          <div className="text-sm font-[500] text-red mt-1">
            {errors[fieldId]?.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
