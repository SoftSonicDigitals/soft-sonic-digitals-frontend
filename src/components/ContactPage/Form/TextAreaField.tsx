import { FieldId, FormFields } from "@/models/contact_page";
import React from "react";
import { UseFormRegister } from "react-hook-form";

type TextAreaFieldProps = {
  fieldId: FieldId;
  label: string;
  register: UseFormRegister<FormFields>;
  isRequired?: boolean;
};
const TextAreaField = ({
  fieldId,
  label,
  register,
  isRequired,
}: TextAreaFieldProps) => {
  return (
    <div className="flex flex-col gap-1 text-gray-700">
      <label htmlFor={fieldId} className="font-[600] text-sm">
        {label} {isRequired && <span className="text-red text-xl">*</span>}
      </label>

      <textarea
        id={fieldId}
        className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm h-40"
        {...register(fieldId)}
      />
    </div>
  );
};

export default TextAreaField;
