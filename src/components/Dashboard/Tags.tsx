import React from "react";
import { BsTags } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormDropDownOption } from "../ContactPage";
import { DialogDescription } from "@radix-ui/react-dialog";

const Tags = () => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div>
        <div
          className="inline-block px-3 py-2 rounded-xl  
      text-sm font-[700] tracking-wider text-white bg-[#F57C00] mr-3"
        >
          Critical
        </div>

        <div className="inline-block px-3 py-2 rounded-xl text-sm  font-[700] tracking-wider text-white bg-[#D32F2F]">
          Urgent
        </div>
      </div>

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
          <DialogDescription>Chnage tags</DialogDescription>
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
              <FormDropDownOption value={"hello"} title={"title"} />
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
              <FormDropDownOption value={"hello"} title={"title"} />
            </select>
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tags;
