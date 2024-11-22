"use client";
import React, { useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { EditFormModal } from "./";

type EditButtonProps = {
  displayForm: "profile" | "requirement";
};

const EditButton = ({ displayForm }: EditButtonProps) => {
  const [openEditForm, setOpenEditForm] = useState(false);

  return (
    <>
      <div onClick={() => setOpenEditForm(true)} className="cursor-pointer">
        <HiOutlinePencilAlt className="text-3xl text-gray-600" />
      </div>

      <EditFormModal
        open={openEditForm}
        setOpen={setOpenEditForm}
        displayForm={displayForm}
      />
    </>
  );
};

export default EditButton;
