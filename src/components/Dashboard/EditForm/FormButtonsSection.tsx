import React, { Dispatch } from "react";
import { FormButton } from "./";
import { GoTrash } from "react-icons/go";
import axios from "axios";
import { redirect, useParams } from "next/navigation";
import { mutate } from "swr";
import toast from "react-hot-toast";
import { Router } from "lucide-react";

const FormButtonsSection = ({
  setOpen,
  isSubmitting,
}: {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isSubmitting: boolean;
}) => {
  const params = useParams();

  const deleteLeadHandler = async () => {
    try {
      const result = await axios.delete(`/api/leads/${params.leadId}`);

      if (result.status === 200) {
        toast.success(`Lead Deleted Successfully`);
        mutate(`/api/leads`);
        setOpen(false);
        redirect("/admin/leads");
      }
    } catch (error) {
      toast.error("Lead couldn't be deleted. Try again");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-between mt-5">
      <FormButton
        btnText="Delete lead"
        btnType="button"
        btnStyles="bg-red-100 hover:bg-red-700 group "
        btnTextStyles="text-red-300 group-hover:text-white"
        iconStyles="text-red-300 group-hover:text-white"
        Icon={GoTrash}
        clickHandler={deleteLeadHandler}
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
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default FormButtonsSection;
