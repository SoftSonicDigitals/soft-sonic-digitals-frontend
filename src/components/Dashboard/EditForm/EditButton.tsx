"use client";
import React, { useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import EditForm from "./EditForm";

const EditButton = () => {
  const [openEditForm, setOpenEditForm] = useState(true);

  return (
    <>
      <div onClick={() => setOpenEditForm(true)} className="cursor-pointer">
        <HiOutlinePencilAlt className="text-3xl text-gray-800" />
      </div>

      <EditForm open={openEditForm} setOpen={setOpenEditForm} />
    </>
  );
};

export default EditButton;
