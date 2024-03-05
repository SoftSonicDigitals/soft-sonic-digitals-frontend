import React from "react";
type ResourcesSubmenuProps = {
  setIsOpen: React.Dispatch<boolean>;
};
const ResourcesSubmenu = ({ setIsOpen }: ResourcesSubmenuProps) => {
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="hidden lg:block absolute z-100 top-[5.5rem] right-0 bg-white w-[100vw] shadow-t-md text-gray-900 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transform origin-top  "
    ></div>
  );
};

export default ResourcesSubmenu;
