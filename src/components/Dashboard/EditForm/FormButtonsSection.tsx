"use client";
import React, { Dispatch, useState } from "react";
import { DeleteLeadConfirmationModal, FormButton } from "./";
import { GoTrash } from "react-icons/go";

const FormButtonsSection = ({
  setOpen,
  isSubmitting,
  showDeleteButton,
}: {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isSubmitting: boolean;
  showDeleteButton: boolean;
}) => {
  let [isDeleteConfirmationModalOpen, setIsDeletConfirmationModalOpen] =
    useState(false);

  const deleteConfirmationHandler = () => {
    setIsDeletConfirmationModalOpen(true);
  };

  return (
    <>
      <div className="flex sm:justify-between mt-5 gap-3">
        {showDeleteButton && (
          <FormButton
            btnText="Delete lead"
            btnType="button"
            btnStyles="bg-red-100 hover:bg-red-700 group "
            btnTextStyles="text-red-300 group-hover:text-white"
            iconStyles="text-red-300 group-hover:text-white"
            Icon={GoTrash}
            clickHandler={deleteConfirmationHandler}
            ModalComponent={
              <DeleteLeadConfirmationModal
                setEditModalOpen={setOpen}
                openDeleteModal={isDeleteConfirmationModalOpen}
                setOpenDeleteModal={setIsDeletConfirmationModalOpen}
              />
            }
          />
        )}
        <div className="flex gap-3">
          <FormButton
            isCancelBtn={true}
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
    </>
  );
};

export default FormButtonsSection;
