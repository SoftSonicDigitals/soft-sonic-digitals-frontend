"use client";
import React, { Dispatch } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";

const DeleteLeadConfirmationModal = ({
  openDeleteModal,
  setOpenDeleteModal,
  setEditModalOpen,
}: {
  openDeleteModal: boolean;
  setOpenDeleteModal: Dispatch<React.SetStateAction<boolean>>;
  setEditModalOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const params = useParams();
  const router = useRouter();

  const { mutate } = useSWRConfig();

  const deleteLeadHandler = async () => {
    try {
      const result = await axios.delete(`/api/leads/${params.leadId}`);

      if (result.status === 200) {
        toast.success(`Lead Deleted Successfully`);
        mutate(`/api/leads`);
        setOpenDeleteModal(false);
        router.push("/admin/leads");
      }
    } catch (error) {
      toast.error("Lead couldn't be deleted. Try again");
      console.error(error);
    }
    setOpenDeleteModal(false);
    setEditModalOpen(false);
  };

  return (
    <Dialog
      open={openDeleteModal}
      onClose={() => setOpenDeleteModal(false)}
      className="relative z-50"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-800/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className=" fixed inset-0 flex w-screen items-center justify-center p-4">
        <div className="relative">
          <DialogPanel className=" max-w-md  space-y-4 border bg-white p-12 rounded-sm">
            <IoMdClose
              className="absolute text-2xl top-4 right-4 cursor-pointer text-gray-700 z-40"
              onClick={() => setOpenDeleteModal(false)}
            />
            <DialogTitle className="mb-10">
              <p className="flex-center mb-4">
                <div className="inline-block border-2 border-red-700 rounded-full">
                  <IoMdClose className="text-6xl text-red-700 m-3" />
                </div>
              </p>
              <p className="flex-center text-2xl">Are you Sure?</p>
            </DialogTitle>

            <p className="flex-center text-center font-[500] text-gray-700 mb-10">
              Do you really want to delete these records? This process cannot be
              undone.
            </p>

            <div className="flex-center gap-4 !mt-10">
              <button
                onClick={() => setOpenDeleteModal(false)}
                className="px-6 py-2 bg-gray-500 text-white rounded-sm hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteLeadHandler()}
                className="bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700 border-[1px] border-white text-white px-6 py-2 transition rounded-sm"
              >
                Delete
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteLeadConfirmationModal;
