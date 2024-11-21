import React, { Dispatch } from "react";
import { FormButton } from "./";
import { GoTrash } from "react-icons/go";

const FormButtonsSection = ({
  setOpen,
}: {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-between mt-5">
      <FormButton
        btnText="Delete lead"
        btnType="button"
        btnStyles="bg-red-100 hover:bg-red-700 group "
        btnTextStyles="text-red-300 group-hover:text-white"
        iconStyles="text-red-300 group-hover:text-white"
        Icon={GoTrash}
      />
      <div className="flex gap-3">
        <FormButton
          btnText="Cancel"
          btnType="button"
          btnStyles="bg-white  group  border-[1px] hover:bg-gray-800 group"
          btnTextStyles="text-gray-800 group-hover:text-white  "
          iconStyles="text-red-300 group-hover:text-white"
          clickHandler={() => setOpen(false)}
        />
        <FormButton
          btnText="Save changes"
          btnType="submit"
          btnStyles="bg-gray-800  group  border-[1px] hover:bg-white group"
          btnTextStyles="text-white group-hover:text-gray-800 "
          iconStyles="text-red-300 group-hover:text-white"
        />
      </div>
    </div>
  );
};

export default FormButtonsSection;
