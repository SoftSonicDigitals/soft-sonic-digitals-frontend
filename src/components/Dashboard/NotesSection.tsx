import { useUser } from "@clerk/nextjs";
import React from "react";

const NotesSection = () => {
  const user = useUser();
  return <div className="mt-10 mx-4 text-2xl font-[600]">Notes</div>;
};

export default NotesSection;
