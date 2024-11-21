"use client";

import { Dispatch, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { FaUser } from "react-icons/fa";
import { EditForm } from "./";
const EditFormModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-800/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden  bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className=" h-16 bg-gray-200 m-[2px] mb-0  relative">
              <div className="inline-block rounded-full border-2  border-gray-500 p-3 bg-white absolute -bottom-1/3 left-6 shadow-md ">
                <FaUser className="text-gray-500 text-3xl" />
              </div>
            </div>
            <div className="bg-white border-gray-200 border-[1px] m-[2px] mt-0  pb-8 pt-5 p-6 sm:pb-4">
              <div className="mt-4">
                <p className="text-2xl font-[700] ">Amelie Laurent</p>
                <p className="text-sm text-gray-700 font-[600]">
                  amelie@untitleedui.com
                </p>

                <EditForm setOpen={setOpen} />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default EditFormModal;
