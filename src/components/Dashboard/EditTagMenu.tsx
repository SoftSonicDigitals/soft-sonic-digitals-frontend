"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useRef, useState } from "react";
import { BsTags } from "react-icons/bs";
import { PRIORITY_TAGS, STATUS_TAGS } from "@/prototypes/dashboard";
import { FormDropDownOption } from "../ContactPage";
import { Button } from "../ui/button";
import { Tags } from "@/models/dashboard";
import { updateTags } from "@/actions";

const EditTagMenu = ({ priority, status, id }: Tags) => {
  const priorityRef = useRef<HTMLSelectElement | null>(null);
  const statusRef = useRef<HTMLSelectElement | null>(null);
  const [open, setOpen] = useState(false);

  const updateTagHandler = async () => {
    const tags = await updateTags(
      priorityRef.current?.value!,
      statusRef.current?.value!,
      id
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="hover:bg-gray-300 p-1.5 rounded-lg cursor-pointer border-[1px] transition duration-200"
          onClick={() => setOpen(true)}
        >
          <BsTags className="h-[24px] w-[24px]" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] px-12">
        <DialogHeader>
          <DialogTitle>Edit Tags</DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <div className="flex-center gap-6">
          <label htmlFor="priority" className=" font-[500] w-24">
            Priority
          </label>
          <select
            ref={priorityRef}
            id="priority"
            className={`appearance-none relative border-[1px] w-full  py-2 outline-0 px-4 text-sm text-gray-700 rounded-md `}
            defaultValue={priority}
          >
            {PRIORITY_TAGS.map(({ title, value }, index) => (
              <FormDropDownOption value={value} title={title} key={index} />
            ))}
          </select>
        </div>

        <div className="flex-center gap-6">
          <label htmlFor="status" className=" font-[500] w-24">
            Status
          </label>
          <select
            ref={statusRef}
            id="status"
            className={`appearance-none relative border-[1px] 
          w-full  py-2 outline-0 px-4 text-sm text-gray-700 rounded-md`}
            defaultValue={status}
          >
            {STATUS_TAGS.map(({ title, value }, index) => (
              <FormDropDownOption value={value} title={title} key={index} />
            ))}
          </select>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="bg-gray-400 text-white hover:bg-white hover:text-black border-white hover:border-black border-[1px] transition duration-300"
            onClick={() => {
              updateTagHandler();
              setOpen(false);
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default EditTagMenu;
