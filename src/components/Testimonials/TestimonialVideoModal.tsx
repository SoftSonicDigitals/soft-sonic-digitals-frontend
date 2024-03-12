"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoClose } from "react-icons/io5";

type VideoModalType = {
  videoKey: string;
  children: React.ReactNode;
};
export default function TestimonialVideoModal({
  videoKey,
  children,
}: VideoModalType) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div onClick={openModal} className="embla__slide">
        {children}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black opacity-80"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300 transform transition-transform"
                enterFrom="opacity-0 -translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-300 transform transition-transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-full"
              >
                <Dialog.Panel className=" relative w-[650px] h-[340px] transform overflow-hidden shadow-xl transition-all">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoKey}`}
                    className=" w-[598px] h-[320px] mt-4"
                  />
                  <button
                    type="button"
                    className="absolute -top-0 right-2.5 z-30 text-white p-1"
                    onClick={closeModal}
                  >
                    <IoClose className="text-2xl " />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
