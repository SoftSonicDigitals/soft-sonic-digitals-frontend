import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { BsTags } from "react-icons/bs";
import { PRIORITY_TAGS, STATUS_TAGS } from "@/prototypes/dashboard";
import { FormDropDownOption } from "../ContactPage";
import { Button } from "../ui/button";

const EditTagMenu = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:bg-gray-300 p-1.5 rounded-lg cursor-pointer border-[1px] transition duration-200">
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
            id="priority"
            className={`appearance-none relative border-[1px] 
          w-full  py-2 outline-0 px-4 text-sm text-gray-700 rounded-md `}
            defaultValue={""}
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
            id="priority"
            className={`appearance-none relative border-[1px] 
          w-full  py-2 outline-0 px-4 text-sm text-gray-700 rounded-md`}
            defaultValue={""}
          >
            {STATUS_TAGS.map(({ title, value }, index) => (
              <FormDropDownOption value={value} title={title} key={index} />
            ))}
          </select>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="bg-gray-400 text-white hover:bg-gray-700"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default EditTagMenu;
