"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";

const NotesSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{ note: string }>();

  const user = useUser();

  const [toogleTextArea, setToogleTextArea] = useState(false);

  const onAddNoteHandler = () => {
    if (toogleTextArea) {
    } else {
      setToogleTextArea(true);
    }
  };

  return (
    <div className="mx-4">
      <div className="mt-10 mx-4 text-2xl font-[600]">Notes</div>

      {toogleTextArea && (
        <Textarea
          className={` border-gray-600 mt-8 ${
            errors?.note ? "border-red" : "border-gray-600 "
          } w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
          {...register("note")}
        />
      )}
      <div className="flex gap-4 items-center mt-6 ">
        <button
          onClick={() => onAddNoteHandler()}
          className=" bg-gray-200 py-2 px-4 font-[600] rounded-md border-2  hover:border-gray-700 hover:bg-white  transition-all duration-300 "
        >
          Add Note
        </button>
        {toogleTextArea && (
          <button
            onClick={() => setToogleTextArea(false)}
            className="bg-gray-200 py-2 px-4 font-[600] rounded-md border-2 hover:bg-red hover:text-white hover:border-red transition-all duration-300"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default NotesSection;
